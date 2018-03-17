import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import styled from 'styled-components';
import GameStartButton from './GameStartButton';
import Sticker from './Sticker';

// import jQuery from 'jquery'
class Game extends Component {
    state = {
        userID:'威君是房主<3',
        stickyArray:["123","5"]
    }
    componentDidMount = () => {
        // window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount() {
        // window.removeEventListener('scroll', this.handleScroll);
    }
    // handleScroll = () => {
    //     if (document.body.scrollTop > 83 || document.documentElement.scrollTop > 83) {
    //         this.setState({ ifIdeaInputFixed: "fixed"})
    //     } else {
    //         this.setState({ ifIdeaInputFixed: "static" })            
    //     }
    // }
    addCard(){
          this.setState({stickyArray:[...this.state.stickyArray,""]});
    }

    render() {
        return (
            <Background>
                <Fixedtheme>
                    {/* 房間代號:{this.props.roomID}<br></br> */}
                    {/* 房主ID:{this.props.roomOwner}<br></br> */}
                    {/* debug用 */}
                    <GameStartButton isRoomOwnerOrNot={this.state.userID === this.props.roomOwner}></GameStartButton>
                    <div id='timer'></div>
                    <IdeaInput placeholder='請輸入主題<3'></IdeaInput>
                </Fixedtheme>
                <NoteArea>
                    <Sticker stickyArray={this.state.stickyArray}></Sticker>
                </NoteArea>
                <NewNoteButton onClick={()=>{
                    this.props.dispatch({
                        type: 'addStickyNote'
                    })
                    // console.log(this);
                }}/>
            </Background>
        );
    }
}
const mapStateToProps = state => {
    return {
        roomID: state.room.roomID,
        roomOwner: state.room.roomOwner,
    }
}
export default withRouter(connect(mapStateToProps)(Game));
//connect 連結到的是reducer裡面的state,如果有多個reducer則要指定reducer
//整包的store.reducerName.state中指定的property
//資料全部切到redux

const milkshop = '#587a30';
const Background = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    max-width: 360px;
    height: 640px; 
    /* debug用height */
    overflow-x: hidden;
    background: ${milkshop};
`
const Fixedtheme = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;    
    background-color: #FFF;
    color: ${milkshop};
    text-align: center;
    /* button {
        background: ${milkshop};
        color: white;
        border-radius: 5px;
    } */
`
const IdeaInput = styled.input`
    width: 100%;
    height: 50px;
    color: palevioletred;
    background: rgba(192,192,192,0.3);
    border: 0px;
    text-align: center;
    font-size: 20px;    
`
const NoteArea = styled.div`
    width: 100%;
    height: 4000px;
    margin-top: 110px;
    /* debug */
    background: ${milkshop};
    color: white;
`
const NewNoteButton = styled.button`
    position: fixed;
    width: 50px;
    height: 50px;
    display: fixed;
    bottom: 10px;
    right: 10px;
    border: 0px solid #000;;
    border-radius: 100%;
    background: #fff;
    opacity: .92;
`
