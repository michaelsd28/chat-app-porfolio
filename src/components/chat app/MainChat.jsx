/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { useParams } from 'react-router-dom'
import '../../styles/chat.css'
import { motion } from 'framer-motion'
import PageAnimation from '../Page animation/PageAnimation'
import { IconButton } from '@mui/material'
import { Mic, Send } from '@mui/icons-material'
let containerStyle = {
  height: '100vh',
  width: '100vw',
  display: 'flex',
  color: 'black',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  background:
    'linear-gradient(to right top, #111827, #101a2a, #0f1b2e, #0c1d31, #091f35)',
  color: 'gray',
}

function MainChat() {
  let { username } = useParams()
  const [isTexting, setIsTexting] = React.useState(false)

  return (
    <PageAnimation>
      {' '}
      <div style={containerStyle}>
        <link
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          rel="stylesheet"
        />

        <div className="container ">
          <div className="row clearfix ">
            <div className="col-lg-12 ">
              <div
                style={{
                  backgroundImage:
                    'radial-gradient( circle farthest-corner at 10% 20%,  rgba(37,145,251,0.98) 0.1%, rgba(0,7,128,1) 99.8% )',
                }}
                className="card chat-app"
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'auto',
                    maxHeight: 500,
                  }}
                  id="plist"
                  className="people-list "
                >
                  <div className="input-group ">
                    <div
                    className='card d-flex justify-content-center align-items-center'
                      style={{
                        borderRadius: 20,
                        background:
                          'linear-gradient( 109.6deg,  rgba(61,245,167,1) 11.2%, rgba(9,111,224,1) 91.1% )',
                      }}
                    >
                      <img
                        style={{ width: 100,margin:"20px 20px 0px 20px" ,justifyContent:'center',alignItems:'center'}}
                        className="card-img-top"
                        src="https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg"
                        alt="dasd"
                      />
                      <div className="card-body">
                        <p className="card-text">
                          Michael Santana
                        </p>
                        <p className="card-text">
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </p>
               
                      </div>
                    </div>
                    <div className="input-group-prepend">
         
                    </div>

                    <input
                    style={{borderRadius:20}}
                      type="text"
                      className="form-control "
                      placeholder="Search..."
                    />
                  </div>
                  <ul style={{overflow:"auto"}} className="list-unstyled chat-list mt-2 mb-0">
                    <li className="clearfix">
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar1.png"
                        alt="avatar"
                      />
                      <div className="about">
                        <div className="name">Vincent Porter</div>
                        <div className="status">
                          {' '}
                          <i className="fa fa-circle offline"></i> left 7 mins
                          ago{' '}
                        </div>
                      </div>
                    </li>
                    <li className="clearfix active">
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar2.png"
                        alt="avatar"
                      />
                      <div className="about">
                        <div className="name">{username}</div>
                        <div className="status">
                          {' '}
                          <i className="fa fa-circle online"></i> online{' '}
                        </div>
                      </div>
                    </li>
                    <li className="clearfix">
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar3.png"
                        alt="avatar"
                      />
                      <div className="about">
                        <div className="name">Mike Thomas</div>
                        <div className="status">
                          {' '}
                          <i className="fa fa-circle online"></i> online{' '}
                        </div>
                      </div>
                    </li>
                    <li className="clearfix">
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar7.png"
                        alt="avatar"
                      />
                      <div className="about">
                        <div className="name">Christian Kelly</div>
                        <div className="status">
                          {' '}
                          <i className="fa fa-circle offline"></i> left 10 hours
                          ago{' '}
                        </div>
                      </div>
                    </li>
                    <li className="clearfix">
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar8.png"
                        alt="avatar"
                      />
                      <div className="about">
                        <div className="name">Monica Ward</div>
                        <div className="status">
                          {' '}
                          <i className="fa fa-circle online"></i> online{' '}
                        </div>
                      </div>
                    </li>
                    <li className="clearfix">
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar3.png"
                        alt="avatar"
                      />
                      <div className="about">
                        <div className="name">Dean Henry</div>
                        <div className="status">
                          {' '}
                          <i className="fa fa-circle offline"></i> offline since
                          Oct 28{' '}
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="chat">
                  <div className="chat-header clearfix">
                    <div className="row">
                      <div className="col-lg-6">
                        <a
                          href="#"
                          data-toggle="modal"
                          data-target="#view_info"
                        >
                          <img
                            src="https://bootdey.com/img/Content/avatar/avatar2.png"
                            alt="avatar"
                          />
                        </a>
                        <div className="chat-about">
                          <h6 className="m-b-0">Aiden Chavez</h6>
                          <small>Last seen: 2 hours ago</small>
                        </div>
                      </div>
                      <div className="col-lg-6 hidden-sm text-right">
                        <a href="#" className="btn btn-outline-secondary">
                          <i className="fa fa-camera"></i>
                        </a>
                        <a href="#" className="btn btn-outline-primary">
                          <i className="fa fa-image"></i>
                        </a>
                        <a href="#" className="btn btn-outline-info">
                          <i className="fa fa-cogs"></i>
                        </a>
                        <a href="#" className="btn btn-outline-warning">
                          <i className="fa fa-question"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="chat-history">
                    <ul className="m-b-0">
                      <li className="clearfix">
                        <div className="message-data text-right">
                          <span className="message-data-time">
                            10:10 AM, Today
                          </span>
                          <img
                            src="https://bootdey.com/img/Content/avatar/avatar7.png"
                            alt="avatar"
                          />
                        </div>
                        <div className="message other-message float-right">
                          {' '}
                          Hi Aiden, how are you? How is the project coming
                          along?{' '}
                        </div>
                      </li>
                      <li className="clearfix">
                        <div className="message-data">
                          <span className="message-data-time">
                            10:12 AM, Today
                          </span>
                        </div>
                        <div className="message my-message">
                          Are we meeting today?
                        </div>
                      </li>
                      <li className="clearfix">
                        <div className="message-data">
                          <span className="message-data-time">
                            10:15 AM, Today
                          </span>
                        </div>
                        <div className="message my-message">
                          Project has been already finished and I have results
                          to show you.
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="chat-message clearfix">
                    <div className="input-group mb-0">
                      <input
                        style={{ borderRadius: '20px' }}
                        type="text"
                        className="form-control"
                        placeholder="Enter text here..."
                      />
                      {isTexting ? (
                        <div
                          style={{ margin: '5px 5px 5px 10px' }}
                          className="input-group-prepend"
                        >
                          <IconButton
                            style={{
                              background:
                                'radial-gradient( circle farthest-corner at 10% 20%,  rgba(90,92,106,1) 0%, rgba(32,45,58,1) 81.3% )',
                            }}
                            aria-label="add to favorites"
                          >
                            <Send style={{ color: 'white' }} />
                          </IconButton>
                        </div>
                      ) : (
                        <div
                          style={{ margin: '5px 5px 5px 10px' }}
                          className="input-group-prepend"
                        >
                          <IconButton>
                            <Mic style={{ color: 'white' }} />
                          </IconButton>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageAnimation>
  )
}

export default MainChat
