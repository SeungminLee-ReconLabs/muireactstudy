import { 
  Button,
  Container,
  Paper,
  Typography,
  Grid,
  makeStyles,
  Divider
} from "@material-ui/core";
import { CountertopsOutlined } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { reconlabsMellowYellow, reconlabsPrimaryYellow } from "../cssVariables";
import { readFile } from "../lib/utils";

/* 썸네일 라이브러리 */
import { getMetadata, getThumbnails } from 'video-metadata-thumbnails';

/**
주요 로직
- 파일 브라우즈 (파일검증안내) 및 관련 UI 변경
- 브라우즈한 파일 별 메타데이터 추출 로직
- 파일별 메타데이버 및 동영상 데이터 S3에 각각 업로드(Axios)

 */


export default function Upload(props) {
  const [uploadStep, setUploadStep] = useState('fileBrowse') // fileBrowse, uploadOngoing, uploadComplete
  let component;
  useEffect(()=> {
    console.log(uploadStep);
    switch (uploadStep) {
      case 'fileBrowse':
        component = (<FileBrowse setUploadStep={setUploadStep}></FileBrowse>);
        break;
      case 'uploadOngoing':
        component = (<UploadOngoing setUploadStep={setUploadStep}></UploadOngoing>);
        break;
      case 'uploadComplete':
        component = (<UploadComplete setUploadStep={setUploadStep}></UploadComplete>);
        break;
    }
  }, uploadStep)
  return (
    <>
      {uploadStep  === 'fileBrowse' ? <FileBrowse setUploadStep={setUploadStep}></FileBrowse> : <></>}
      {uploadStep  === 'uploadOngoing' ? <UploadOngoing setUploadStep={setUploadStep}></UploadOngoing> : <></>}
      {uploadStep  === 'uploadComplete' ? <UploadComplete setUploadStep={setUploadStep}></UploadComplete> : <></>}
    </>
  );
}

/* ************************************************************************************************ */


const FileBrowseStyles = makeStyles((theme)=>({
  PictureGuideButton: {
    width: '470px',
    maxWidth: '80%',
    margin: '55px 0px'
  },
  BrowseButton: {
    width: '202px',
    maxWidth: '80%',
    height: '52px',
    marginLeft:'auto',
    marginRight:'auto',
    marginTop:'20px',
  },
  BrowsePaper: {
    padding:'30px 0px',
    width:'700px',
    maxWidth:'85%',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    gap:'10px',
    margin: '0px 0px',
    border: `3px dashed ${reconlabsPrimaryYellow}`,
  },
  FileListGrid: {
    width:'700px',
    maxWidth:'85%',
    display:'flex',
    backgroundColor: reconlabsMellowYellow,
    padding: '20px 0px 20px 45px',
    
  },
  UploadButton: {
    width: '234px',
    height:'52px',
    marginBottom:'42px',
  },
}))

function FileBrowse(props) {
  const [fileList, setFileList] = useState([])
  let uploadCapacity


  const classes = FileBrowseStyles()
  /* 동영상 Browse 및 추가 제거 */
  const handleBrowseByDrop = (event) => {
    event.stopPropagation();
    event.preventDefault();
    if (["dragover"].includes(event.type)) {
      // Paper에 elevation 추가
      const paperElem = document.querySelector(`.${classes.BrowsePaper}`)
      paperElem.classList.add("MuiPaper-elevation20")
    }
  
    if (["dragleave", "drop"].includes(event.type)) {
      // Paper elevation 제거
      const paperElem = document.querySelector(`.${classes.BrowsePaper}`)
      paperElem.classList.remove("MuiPaper-elevation20")
    }
    if (event.type === "drop") {
      console.log(event.dataTransfer.files);
      validateFileList(event.dataTransfer.files)
    }
  }
  const handleBrowseByClick = (event) => {
    console.log(event.target.files)
    validateFileList(event.target.files)
  }

  const validateFileList = (files) => {
    if (files !== 0 ) {
      // setFileList(files)
      let validFiles = []
      let wrongType = false
      let tooBigSize = false
      let tooSmallSize = false
      let sameFileName = false
      let fileNames = fileList.map(file => file.name)
      console.log(fileNames)
      Object.values(files).map(file => {
        console.log(file);
        if(!['video/mp4', 'video/mov'].includes(file.type)) {
          wrongType = true
          return;
        }
        if(file.size >= 1073741824) {
          tooBigSize = true
          return;
        }
        if(file.size <= 10) {
          tooSmallSize = true
          return;
        }
        if(fileNames.includes(file.name)) {
          sameFileName = true;
          return;
        }
        validFiles.push(file)

      })
      if (wrongType) alert(".mp4 .mov 영상만 업로드 가능합니다.");
      if (tooBigSize) alert("1GB 이하의 영상만 업로드 가능합니다.");
      if (tooSmallSize) alert("올바른 영상 파일을 올려주세요.");
      if (sameFileName) alert("같은 파일을 중복해서 올릴 수 없습니다.");
      // setFileList([...fileList, validFiles])
      setFileList([...fileList, ...validFiles])
      console.log("❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤",[...fileList, ...validFiles])
    }
    return
  }

  const unbrowseFile = (event) => {
    console.log(event)
    console.log(event.currentTarget)
    console.log("❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤")
    let unbrowseFilename = event.currentTarget.getAttribute('data-filename')
    console.log(unbrowseFilename)
    console.log(fileList)
    console.log(fileList[0])
    console.log(Array.isArray(fileList))
    let newFileList = fileList.filter(file => file.name !== unbrowseFilename)
    console.log(newFileList)
    setFileList(newFileList)
  }
  
/** 업로드할 파일 추출 로직 */
  // const putVideo = async (file) => {
  //   let fileData  = await readFile(file);
  //   try {
  //     /** fetch 대신 axios를 사용해도 progress bar와 업로드 취소  기능을 넣는다 */
  //     let response = await fetch('동영상을 업로드할 경로',  {method: "PUT", body: filedata})
  //     if (response.status >= 400 && response.status < 600) {
  //       throw new Error("Bad response from AWS Cloud Front");
  //     }
  //     return response
  //   } catch (error) {
  //     console.error("File Upload Error: ", error.message);
  //     alert("Failed to upload file. Please retry.")
  //     return
  //   }
  // }

/**
// Tracking file upload progress using axios
upload(files) {
  const config = {
    onUploadProgress: function(progressEvent) {
      var percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
      console.log(percentCompleted)
    }
  }

  let data = new FormData()
  data.append('file', files[0])

  axios.put('/endpoint/url', data, config)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

 */


  // /**
  //  * 썸네일 파일 비디오에서 추출 및 CloudFront 를 통해 업로드
  //  * @param {File} Javascript File API 
  //  * @returns {Promise<Blob>} 썸네일 이미지 Blob이 담긴 Promise
  //  */
  // const extractThumbnailFromVideeFile = async (file) => {
  //   const metadata = await getMetadata(file);
  //   const thumbnails = await getThumbnails(file, {
  //     quality: 0.6
  //   });
  //   console.log('Thumbnails: ', thumbnails);
  //   let thumbnailBlob = thumbnails[0].blob
  //   console.log(thumbnailBlob)
  //   // blob to arraybuffer
  //   let thumbnailArrayBuffer = await thumbnailBlob.arrayBuffer()
  //   /* 
  //   TODO 썸네일 업로드해야합니다
  //   */
  //  return thumbnailBlob
  // }



  /* ******************************************** 업로드 로직 ********************************************* */
  /* 1. 메타데이터 업로드 (파일이름, 작성시간, 고객이메일 등) */
  

  /* 2. 썸네일 업로드 */

  return (
    <Container>
      <Paper>
        <Grid container style={{gap:'50px', display:'flex', flexDirection:'column', alignItems:'center'}}>
          <Grid item >
            <Typography variant='h6' style={{textAlign:'center', margin:'50px 0px',}}>
              <b>
              업로드 전 반드시 확인해주세요!
              </b>
            </Typography>
            <ul style={{display:'flex', flexDirection: 'column', gap:'5px',}}>
              <li>촬영 중인 영상에 모델링할 제품이 항상 들어와 있어야 합니다. </li>
              <li>촬영 중 영상을 확대, 축소 하지 않습니다. </li>
              <li>흔들림 없이, 360도, 3바퀴 이상 촬영 합니다 . </li>
              <li>하나의 영상으로 이어서 촬영 합니다.</li>
              <br/>
              <li>추천 촬영 세팅은 UHD (60 fps) 입니다.</li>
              <li>보통 1~2분 길이의 영상이 촬영됩니다.</li>
              <li>화면의 떨림이 적을 수록 좋습니다. 천천히 찍어주세요.</li>
              <li>투명, 반사가 심한 재질은 모델링이 거부될 수 있습니다.  </li>
              <br/>
              <li>추천 제품군 : 옷, 신발, 가방, 쇼파 등 천 재질 제품 </li>
            </ul>
            <div style={{width:'100%', textAlign:'center'}}>
              <Button variant='contained' color='primary' className={classes.PictureGuideButton} href="#/guide">자세한 활영 방법 확인하기</Button>
            </div>
          </Grid>
          <Divider style={{width: '95%'}} variant='middle'/>
          {/* QR코드 및 설명 */}
          <div style={{display:'flex', alignItems:'center', gap:'20px',}}>
            <img style={{width: '133px', height:'133px', }} />
            <div>
              <Typography variant='h5'>영상이 휴대전화에 있다면?</Typography>
              <Typography variant='subtitle1'>QR코드를 스캔하여 휴대폰 영상을 업로드 하세요.</Typography>
            </div>
          </div>
          {/* 파일 선택 Zone */}
          {/* Drag and Drop에 따라 elevation 을 변경해주는 식으로 업로드 가능을 activate */}
          {/* MuiPaper-elevation10 toggle  */}
          <Paper elevation={0} className={classes.BrowsePaper}
            onDrop={handleBrowseByDrop}
            onDragEnter={handleBrowseByDrop}
            onDragOver={handleBrowseByDrop}
            onDragLeave={handleBrowseByDrop}
          >
            {/* 파일 찾기 */}
            <Typography variant='h5' align='center'>업로드할 파일을 선택해주세요.</Typography>
            <Typography variant='subtitle1' align='center'>1GB 이하의 .mp4 .mov 영상만 업로드 가능합니다.</Typography>
            <label 
              htmlFor='browseVideo' 
              for="browseVideo" 
              style={{display:'flex', alignItems:'center'}}
            >
              <Button component="div" variant='outlined' color='primary' className={classes.BrowseButton}>
                파일 찾기
              </Button>
              <input
                type="file"
                id='browseVideo'
                style={{display:'none',}}
                accept="video/*"
                onChange={handleBrowseByClick}
                multiple
              />          
            </label>
          </Paper>
          {/* 선택된 파일 Zone */}

          {
            fileList && fileList.length !== 0 
            ?
            <Grid container spacing={3} className={classes.FileListGrid}>
              {/* {Object.values(fileList).map((file) => ( */}
              {(fileList).map((file) => (
                <React.Fragment key={Math.random()}>
                  <Grid item md={8}>
                    {file.name}
                    {/* {file.type} */}
                  </Grid>
                  <Grid item md={4}>
                    {(file.size / 1000000).toFixed(1)}MB 
                    <Button data-filename={file.name} onClick={unbrowseFile}>X</Button>
                  </Grid>

                </React.Fragment>
              ))}
              
            </Grid>
            : <></>
          }
          {/* 업로드 버튼 */}
          {/* disabled Toggle */}
          <Button variant='contained' color='primary'  className={classes.UploadButton}> 
            업로드 {uploadCapacity || 'N'} 회 남았습니다
          </Button>
        </Grid>
      </Paper>
      {/* 바닥 여백 */}
      <div className="TEMP" style={{marginBottom:'150px'}}></div>
    </Container>
  )
}

/* ************************************************************************************************ */

function UploadOngoing(props) {
  return (
    <Container>
      <Paper>
        <Typography>영상이 업로드 중입니다. 잠시만 기다려 주세요.</Typography>
        <Typography>지금 화면을 이동하시면 파일 업로드가 취소됩니다.</Typography>
        {/* 업로드 진행중인 파일명과 진행퍼센트 */}
        <div className="ProgressBars">
          <Grid container>
            <Grid item md={4} xs={12}>
              파일명
            </Grid>
            <Grid item md={8} xs={12}>
              진행상황
            </Grid>
          </Grid>
        </div>
        {/* 취소하기 버튼 */}
        <Button variant='outlined'>취소하기</Button>
      </Paper>
    </Container>
  )
}

/* ************************************************************************************************ */

function UploadComplete(props) {
  return (
    <Container>
      <Paper>
        <Typography>업로드가 완료되었습니다.</Typography>
        <Button variant='contained' color='primary'>확인하러 가기</Button>
      </Paper>
    </Container>
  )
}