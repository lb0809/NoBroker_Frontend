import * as React from 'react';
import './chat-interface.css'
import Grid2 from '@mui/material/Unstable_Grid2'; 
import  TextField  from '@mui/material/TextField';
// import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';

import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack';

import Box from '@mui/material/Box'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { useSelector } from 'react-redux';

import { gql, useQuery,useLazyQuery ,useMutation} from '@apollo/client';
import { ListItemButton } from '@mui/material';

import { io } from "socket.io-client";
const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

const cardStyle = {
    display: 'block',
    width:'100%',
    transitionDuration: '0.3s',
    height: '20vw',
    overflow: 'auto'
}

const ChatInterface = () => {
    const socket = React.useRef();
    const user = useSelector(state => state.user.user)
    const [text, settext] = React.useState('')
    const [newText, setNewText] = React.useState('')
    const [conId, setConId] = React.useState('')
    const [receiverId, setReceiverId] = React.useState('')
    const [searchName, setSearchName] = React.useState('')
    const [newChat,setNewChat] = React.useState('')

    React.useEffect(()=>{
      socket.current=io("https://nobroker-chat-ioserver.onrender.com/")
      socket.current.emit("addUser",user.id)
    },[])
    
    const[getTexts,{loading:l,data:d,refetch,called}]=useLazyQuery(GET_TEXTS) 
    if(d) {
      console.log(d)}
    React.useEffect(() => {
      if(called) refetch({id:conId})
      else getTexts({skip:conId==='',variables:{id:conId}})
    }, [newText])
    
    React.useEffect(()=>{
      socket.current.on("newText",({senderId,text:newTxt})=>{
        setNewText(newTxt)
        console.log(newText)
        console.log("first")
      })
      socket.current.on("newChat",(senderId)=>{
        setNewChat(senderId)
      })
    },[socket,conId,refetch])
      const [send,{loading:ld}]=useMutation(SEND_TEXT,{
      update(_,result){
        socket.current.emit("sendText",{senderId:user.id,receiverId,text})
        console.log(result)
        refetch({id:conId})
        // gettexts({variables:{conId}})
      },
      onError(err){
        console.log(err)
        console.log(err?.graphQLErrors[0]?.extensions?.exception?.errors)
      },
      variables:{
        id:conId,
        text
      }
    })
    let {loading,err,data,refetch:refetch_chats}=useQuery(GET_CHATS)
    if(err) console.error(err)
    if(data) data=data.getConversations
    React.useEffect(() => {
      refetch_chats()
    }, [newChat])
    const [startChat,{loading:load}]=useMutation(START_CONVERSATION,{
      update(_,result){
        socket.current.emit("chatUpdated",{receiverId:result.data.startConversation.receiver.id,senderId:user.id})
        console.log(result.data)
        // console.log(result.data.data.startConversation)
        refetch_chats()
        // gettexts({variables:{conId}})
      },
      onError(err){
        console.log(err)
        console.log(err?.graphQLErrors[0]?.extensions?.exception?.errors)
      },
      variables:{
        receiverUsername:searchName
      }
    })
    const handleClick=(id,recId)=>{
      setConId(id)
      setReceiverId(recId)
      if(called) refetch({id})
      else getTexts({skip:conId==='',variables:{id}})
    }
    const handleSend=()=>{
      send()
      
    }
    const handleSearch=()=>{
      startChat()
    }
    return (
        <>
        <Box>
            <Grid2 container sx={{mt:6}}  spacing={2}>
                <Grid2 xs={3}>
                    <Card style={cardStyle} >
                        <CardContent>
                            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                              {data?data.map((item,index)=>{
                                return(
                                    <ListItemButton key={index} onClick={()=>{handleClick(item.id,item.receiver.id)}}   alignItems='flex-start'>
                                      <ListItemAvatar sx={{}}>
                                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                      </ListItemAvatar>
                                      <ListItemText sx={{paddingTop:'2px'}}>
                                        {item.receiver.username}
                                      </ListItemText>
                                    </ListItemButton>
                                )
                              }):<div>No chats to show</div>}
                              <Stack direction="row" alignItems="center" spacing={1}>
                                <TextField label="Search By username" id="Search By username" value={searchName} onChange={(e)=>{setSearchName(e.target.value)}} >
                                </TextField>
                                <IconButton  aria-label='send' size='small' onClick={handleSearch} >
                                  <i className="fa-solid fa-paper-plane-top" ></i>+
                                </IconButton>
                              </Stack>
                            </List>
                        </CardContent>
                    </Card>
                </Grid2>
                
                {conId===''?<div>Chats</div>:<Grid2 xs={6}>
                <Card >
                  <CardContent>
                    <Grid2 container>
                      <Grid2 xs={12}>
                        a
                      </Grid2>
                      <Grid2 xs={12} >
                         {d&&d.getMessages.map((item,index)=>{
                          let color=`black`
                          let align=`left`
                          if(item.sender===user.id) {
                            color=`green`
                            align=`right`
                          }
                          return(
                          <>
                            <div key={index} style={{color:color,textAlign:align}}>{item.text}</div>
                          </>)
                         })}     
                      </Grid2>
                      <Grid2 xs={12}>
                      <Stack direction="row" alignItems="center" spacing={1}>
                        <TextField label="fullWidth" id="fullWidth" value={text} onChange={(e)=>{settext(e.target.value)}} >
                        </TextField>
                        <IconButton  aria-label='send' size='small' onClick={handleSend} >
                          {/* <SendRoundedIcon style={{paddingRight:'10px'}} fontSize='inherit'/> */}
                          <i className="fa-solid fa-paper-plane-top" ></i>->
                        </IconButton>
                        </Stack>
                      </Grid2>
                    </Grid2>
                  </CardContent> 
                </Card>
                </Grid2>}
            </Grid2>
        </Box>
        {/* <div className="BoxChat" style={{"marginTop":"5rem"}}>
            <div className="BoxInfoUser">
                <img src="https://w7.pngwing.com/pngs/954/328/png-transparent-computer-icons-user-profile-avatar-heroes-head-recruiter-thumbnail.png" className="ImageProfileBot" />
                <p className="NameBot">Owoner</p>
                <div className="Menu">
                    <div>New chat</div>
                </div>
            </div>
            <div className="BoxMassage"> */}
                {/* <div className="SendmsgNow">send now Massage (hello , how are you,...)</div> */}
            {/* </div>
            <div className="BoxSend">
                <input className="input-class msgUser" type="text" placeholder="enter your text..." />
                <button className='send-btn'><i class="fa fa-paper-plane" aria-hidden="true"></i></button>
                <button className='send-btn'><i class="fa fa-video-camera" aria-hidden="true"></i></button> */}
                {/* <div className="send"><svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M7.75778 6.14799C6.84443 5.77187 6.0833 5.45843 5.49196 5.30702C4.91915 5.16036 4.18085 5.07761 3.63766 5.62862C3.09447 6.17962 3.18776 6.91666 3.34259 7.48732C3.50242 8.07644 3.8267 8.83302 4.21583 9.7409L4.86259 11.25H10C10.4142 11.25 10.75 11.5858 10.75 12C10.75 12.4142 10.4142 12.75 10 12.75H4.8626L4.21583 14.2591C3.8267 15.167 3.50242 15.9236 3.34259 16.5127C3.18776 17.0833 3.09447 17.8204 3.63766 18.3714C4.18085 18.9224 4.91915 18.8396 5.49196 18.693C6.0833 18.5416 6.84443 18.2281 7.75777 17.852L19.1997 13.1406C19.4053 13.0561 19.6279 12.9645 19.7941 12.867C19.944 12.779 20.3434 12.5192 20.3434 12C20.3434 11.4808 19.944 11.221 19.7941 11.133C19.6279 11.0355 19.4053 10.9439 19.1997 10.8594L7.75778 6.14799Z"
                        fill="black" />
                </svg></div> */}
            {/* </div>

        </div> */}
        </>
    )
}

const GET_CHATS=gql`
  query GetConversations {
    getConversations {
      id
      receiver {
        email
        id
        username
      }
      createdAt
    }
  }
`

const GET_TEXTS=gql`
  query GetMessages($id: ID!) {
  getMessages(conversationId: $id) {
    text
    sender
    createdAt
  }
}
`

const SEND_TEXT=gql`
  mutation SendMessage($id: ID!, $text: String!) {
  sendMessage(conversationId: $id, text: $text)
  }
`

const START_CONVERSATION=gql`
  mutation StartConversation($receiverUsername: String!) {
    startConversation(receiverUsername: $receiverUsername) {
      createdAt
      id
      receiver {
        email
        id
      }
    }
  }
`

export default ChatInterface