import './chat.styles.css'
import React, { useState, useRef, useEffect } from 'react'
import { io } from "socket.io-client";
import Peer from "simple-peer";
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actioncreators } from '../../state/actioncreators'
import CopyToClipboard from 'react-copy-to-clipboard';
const socket = io("https://nobroker-chat-ioserver.onrender.com/");

const Chat = () => {
  const users = useSelector(state => state.user_func)
  const loggedin_id = useSelector(state => state.login_id)
  console.log(loggedin_id)
  const dispatch = useDispatch()
  const { sendmsg } = bindActionCreators(actioncreators, dispatch)
  let msg = {
    txt_msg: '',
    from: loggedin_id,
    to: -1
  }
  useEffect(() => {



  },)

  const [message, setmessage] = useState(msg)
  const [msgstate, setmsgstate] = useState('')
  const [usernamestate, setusernamestate] = useState('')
  const [oncall, setoncall] = useState(0)
  const [cur_code, setcur_code] = useState('')
  const [id, setid] = useState('')
  const [stream, setstream] = useState(null)
  const [stream2, setstream2] = useState('')
  const [name, setname] = useState('')
  const [idToCall, setIdToCall] = useState("");
  const [callAccepted, setCallAccepted] = useState(false);
  const [caller, setCaller] = useState("");
  const [callerSignal, setCallerSignal] = useState();
  const [callEnded, setCallEnded] = useState(false);
  const [receivingCall, setReceivingCall] = useState(false);
  const [isCopied, setIsCopied] = useState(false)

  const myVideo = useRef();
  const userVideo = useRef();
  const connectionRef = useRef();
  //This will establish a connection between the client and the server that we

  //have created

  //On establishing the connection the socket will emit the unique id associated

  //with the connection between the client and the socketio server.
  useEffect((

  ) => {

    socket.on("me", (id) => {
      setid(id)
      //set the id

    });//This is a listener on the function that emits the unique id when the connection is made.
  }, [])

  //We can use this id in the future.
  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((currentStream) => {
        setstream(currentStream);
        myVideo.current.srcObject = currentStream;
      });

    socket.on("calluser", ({ from, name, signal }) => {
      setReceivingCall(true);
      setCaller(from);
      setname(name);
      setCallerSignal(signal);
    });
    // eslint-disable-next-line
  }, [socket]);
  //set the stream
  //we can also create a reference to this stream so it can directly be
  // used inside a component using the useRef hook

  //creating a callUser function to enable calling another user using the users 

  //unique socketio connection id

  const sendMsg = (e) => {
    e.preventDefault()
    console.log(users)
    if (usernamestate === '' || msgstate === '') {
      alert("Enter something")
      return
    }
    let index = -1
    for (let i = 0; i < users.length; i++) {
      if (users[i].username === usernamestate) {
        index = i
      }
    }
    if (index === -1) {
      alert("No such user exists")
      return
    }
    const m = {
      txt_msg: msgstate,
      from: loggedin_id.state,
      to: index
    }
    setmessage(m)
    console.log(message)
    sendmsg(message)
  }
  const onmsgChange = (e) => {
    setmsgstate(e.target.value)
  }
  const onusernameChange = (e) => {
    setusernamestate(e.target.value)
  }
  const oncodeChange = (e) => {

    setcur_code(e.target.value)
  }

  const callUser = (id2) => {
    setoncall(1)
    console.log("hj")
    const peer = new Peer({
      initiator: true,
      trickle: false,
      stream: stream //this is the current users stream
    });

    peer.on("signal", (data) => {
      socket.emit("calluser", {
        userToCall: id2,
        signalData: data,
        from: id,//myId,
        name: name//myName

      })

    });

    peer.on("stream", (stream2) => {
      userVideo.current.srcObject = stream2;
      //other users stream can be stored to be displayed.

    });

    socket.on("callaccepted", ({ signal }) => {
      setCallAccepted(true);
      peer.signal(signal);
    });
    connectionRef.current = peer; //set the current peer connection


  };

  //answerCall function to accept an incoming peers call.

  const answerCall = () => {
    setoncall(1)
    setCallAccepted(true);
    const peer = new Peer({

      initiator: false,

      trickle: false,

      stream: stream,

    });

    peer.on("signal", (data) => {

      socket.emit("answercall", { signal: data, to: caller });

    });

    peer.on("stream", (stream2) => {

      userVideo.current.srcObject = stream2;

    });

    peer.signal(callerSignal);

    connectionRef.current = peer;

  };

  //leaveCall function to destroy the peer-to-peer connection

  const leaveCall = () => {
    setCallEnded(true);
    connectionRef.current.destroy();
    window.location.reload();
  };

  return (
    <>
      {oncall && <div className='main-container' >
        <div className='video-container'>
          {/* <div className="my-video" >
            {stream && <video playsInline ref={myVideo} muted autoPlay />}
          </div> */}
          <div className="user-video">
            {callAccepted && !callEnded && <video playsInline style={{ "height": "85%", "width": "90%" }} ref={userVideo} autoPlay />}
            {/* {<video style={{ "height": "85%", "width": "90%" }} playsInline ref={myVideo} autoPlay />} */}
          </div>
        </div>
        {/* <div className="my-video" >
          {stream && <video playsInline ref={myVideo} muted autoPlay />}
        </div> */}
        <div className='button-container'>
          {/* <div className="container"> */}
          {/* <button className='join-btn' type="submit" onClick={() => callUser('UW5Nvew8DGXVtRKMAAA8')}>
              Join
            </button> */}
          {/* </div> */}
          <div className="my-video" >
            {stream && <video playsInline ref={myVideo} muted autoPlay />}
          </div>

          <div className="secret-key" style={{ "display": "flex", "flexDirection": "column" }}>
            <h6 style={{ "color": "white" }}>
              Key: {id}
            </h6>
            <CopyToClipboard text={id}>
              <button style={{
                "width": "20px", "borderRadius": "5px", "background": "#ffffff", "boxShadow": "4px 4px 4px, -4px -4px 4px", "border": "none", "backgroundColor": "#b2b2ff",
                "transition": "background-color 1s ease"
              }} onClick={() => setIsCopied(true)}><i class="fa fa-clipboard" aria-hidden="true"></i></button>
            </CopyToClipboard>
            {isCopied ? <span style={{ color: 'red' }}>Copied.</span> : null}
          </div>

          <button className='end-btn' type="submit" >
            End
          </button>

          {/* <button className='end-btn' type="submit" onClick={() => callUser('UW5Nvew8DGXVtRKMAAA8')}>
            End
          </button> */}
          <button style={{ "width": "70px", "height": "25px", "zIndex": "1", "marginTop": "4.5rem", "marginRight": "2rem", "border": "none", "borderRadius": "70px" }}><i class="fa fa-video-camera" aria-hidden="true"></i></button>
          <button style={{ "width": "70px", "height": "25px", "zIndex": "1", "marginTop": "4.5rem", "border": "none", "borderRadius": "70px" }}><i class="fa fa-microphone" aria-hidden="true"></i></button>



          <div className="container">
            {receivingCall && !callAccepted && (
              <>
                <span>{name}</span>
                <button className="accept-btn" onClick={answerCall}>Accept</button>
              </>
            )}
          </div>


        </div>
      </div>}
      {!oncall && <div className='main-container' >
        <div className='video-container' style={{ "padding": "30px" }}>
          <div className="my-video" >
            {stream && <video style={{ "height": "50%", "width": "50%" }} playsInline ref={myVideo} muted autoPlay />}
          </div>
          {/* <div className="user-video"> */}
          {/* {callAccepted && !callEnded && <video playsInline ref={userVideo} autoPlay />}
            {<video style={{ "height": "85%", "width": "90%" }} playsInline ref={myVideo} autoPlay />} */}
          {/* </div> */}
          <div className='button-container' style={{ "marginLeft": "15rem", "marginTop": "-8rem" }}>
            <button className='camera-btn' style={{ "width": "70px", "height": "25px", "zIndex": "1", "marginTop": "4.5rem", "marginRight": "2rem", "border": "none", "borderRadius": "70px", "background": "linear-gradient(45deg, #2196f3, #ff4685)", "boxShadow": "5px 5px 10px #ba8282, -5px -5px 10px #ffe2e2" }}><i class="fa fa-video-camera" aria-hidden="true"></i></button>
            <button style={{ "width": "70px", "height": "25px", "zIndex": "1", "marginTop": "4.5rem", "border": "none", "borderRadius": "70px", "background": "linear-gradient(45deg, #2196f3, #ff4685)", "boxShadow": "5px 5px 10px #ba8282, -5px -5px 10px #ffe2e2" }}><i class="fa fa-microphone" aria-hidden="true"></i></button>
          </div>
        </div>
        {/* <div className="my-video" >
          {stream && <video playsInline ref={myVideo} muted autoPlay />}
        </div> */}
        {/* <div className='button-container' style={{ "marginLeft": "15rem", "marginTop": "-10rem" }}> */}
        {/* <div className="container">
            <input type='text' value={cur_code} onChange={oncodeChange}></input>
            <button className='join-btn' type="submit" onClick={() => callUser(cur_code)}>
              Join
            </button>
          </div> */}
        {/* <div className="my-video" >
            {stream && <video  playsInline ref={myVideo} muted autoPlay />}
          </div> */}

        {/* <div className="secret-key" style={{ "display": "flex", "flexDirection": "column" }}>
            <h6 style={{ "color": "black" }}>
              Key: {id}
            </h6>
            <CopyToClipboard text={id}>
              <button style={{
                "width": "20px", "borderRadius": "5px", "background": "#ffffff", "boxShadow": "4px 4px 4px, -4px -4px 4px", "border": "none", "backgroundColor": "#b2b2ff",
                "transition": "background-color 1s ease"
              }} onClick={() => setIsCopied(true)}><i class="fa fa-clipboard" aria-hidden="true"></i></button>
            </CopyToClipboard>
            {isCopied ? <span style={{ color: 'red' }}>Copied.</span> : null}
          </div> */}

        {/* <button className='end-btn' type="submit" onClick={() => callUser('UW5Nvew8DGXVtRKMAAA8')}>
            End
          </button> */}
        {/* <button className='camera-btn' style={{ "width": "70px", "height": "25px", "zIndex": "1", "marginTop": "4.5rem", "marginRight": "2rem", "border": "none", "borderRadius": "70px", "background": "#ffb2b2", "boxShadow": "5px 5px 10px #ba8282, -5px -5px 10px #ffe2e2" }}><i class="fa fa-video-camera" aria-hidden="true"></i></button>
          <button style={{ "width": "70px", "height": "25px", "zIndex": "1", "marginTop": "4.5rem", "border": "none", "borderRadius": "70px", "background": "#ffb2b2", "boxShadow": "5px 5px 10px #ba8282, -5px -5px 10px #ffe2e2" }}><i class="fa fa-microphone" aria-hidden="true"></i></button> */}



        <div className="container">
          {receivingCall && !callAccepted && (
            <>
              <span>{name}</span>
              <button className="accept-btn" onClick={answerCall}>Accept</button>
            </>
          )}
        </div>


        {/* </div> */}
        <div className='chat-input-field'>
          <div className="input-container">
            <div className="formmm">
              <div className="input-box">
                <input type="text" value={cur_code} onChange={oncodeChange} required />
                <span>Enter your code</span>
                <i></i>
              </div>
              <button className="join-btn" type="submit" onClick={() => callUser(cur_code)}>Join</button>
              <div className="secret-key" style={{ "display": "flex", "flexDirection": "column" }}>
                <h4 style={{ "color": "black" }}>
                  Key: {id}
                </h4>
                <CopyToClipboard text={id}>
                  <button style={{
                    "width": "20px", "borderRadius": "5px", "background": "#ffffff", "boxShadow": "4px 4px 4px, -4px -4px 4px", "border": "none", "backgroundColor": "#b2b2ff",
                    "transition": "background-color 1s ease", "background": "linear-gradient(45deg, #2196f3, #ff4685)"
                  }} onClick={() => setIsCopied(true)}><i class="fa fa-clipboard" aria-hidden="true"></i></button>
                </CopyToClipboard>
                {isCopied ? <span style={{ color: 'red' }}>Copied.</span> : null}
              </div>
            </div>
          </div>
          <div className="container">
            <div className="input-box">
              <input type="text" value={usernamestate} onChange={onusernameChange} required />
              <span>Type username</span>
              <i></i>

            </div>
            <div className="input-box">
              <input type="text" value={msgstate} onChange={onmsgChange} required />
              <span>Message...</span>
              <i></i>

            </div>
            <button className="join-btn" type="submit" onClick={sendMsg}>Send</button>
          </div>
        </div>
      </div>
      }
    </>
  )
}

export default Chat