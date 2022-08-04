import { Component } from "react";
import * as React from 'react';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import Replay from '@mui/icons-material/Replay';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from "@mui/material/Alert";
import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import CircularProgress from '@mui/material/CircularProgress';
import styles from '../../styles/Home.module.css';
import {default as Quiz_Set} from './quiz.json'

class Quiz extends Component{
   constructor(props){
        super(props)
        this.state = {
            activeStep:0,
            Quiz_Set : Quiz_Set,
            booleanonsubmit : false,
            Total:0,
            open:false,
            catchmsg:"",
            errormsg:""
        }
        
   }

    handleNext=()=>{
        this.setState({activeStep:this.state.activeStep+1})
    }

    handleBack=()=>{
        this.setState({activeStep:this.state.activeStep-1})
    }

    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
         this.setState({open : false})
      };

    onInputChange = (e) => {
          const { Quiz_Set } = this.state;
            console.log({Quiz_Set})
            const nexState = Quiz_Set.map(card => {
                console.log(e.target.name)
            if (card.queno !== e.target.name) return card;
            return {
                ...card,
                options: card.options.map(opt => {
                console.log(card.queno)
                const checked = opt.que_options === (event.target as HTMLInputElement).value;
                console.log(checked)
                return {
                    ...opt,
                    selected: checked
                }
                })
            }
            });
            this.setState({ Quiz_Set: nexState })
    }

    onsubmit = () =>{
         //   console.log(this.state.Quiz_Set)
         let list = this.state.Quiz_Set ;
         let count = 0;
         let notattempcount = 0;
     
                list.map((item,key)=>{
                    item.options.map((anslist,key)=>{
                       //  console.log("anslist.selected===>",anslist.selected)
                       if(anslist.selected === true){
                           if(anslist.que_options === item.ans){
                           //   console.log("===>",anslist.que_options,item.ans)
                               count = count + 1;
                           }
                       }else{
                        notattempcount = notattempcount + 1
                       }
                    })
                  })
          
   
       if(notattempcount<=24 && notattempcount>16){
              this.setState({booleanonsubmit:false,Total:count})
              this.setState({catchmsg:"Please attempt all questions",errormsg:"error",open:true})
       }else{
           this.setState({booleanonsubmit:true,Total:count})
       }
    }


    Snackbarrender =() =>{
        return(
          this.state.open? <Snackbar open={this.state.open} autoHideDuration={5000}  onClose={this.handleClose} style={{marginTop:'0px',width:'100%'}}>
           <MuiAlert elevation={6} variant="filled" onClose={this.handleClose} severity={this.state.errormsg} >
             {this.state.catchmsg}
           </MuiAlert>
         </Snackbar> : null
        )
      }

render(){
    const value= "";

return(
 <Box className="Quiz_render_container">
    { this.state.booleanonsubmit ? 
        <Box className="Quiz-DisplayResult"> 
           <h2> The score is {this.state.Total} Out Of 8 </h2>
             <Button onClick={()=>{this.setState({booleanonsubmit:false,activeStep:0,Quiz_Set : Quiz_Set,Total:0})}}> <Replay/> Try again </Button> 
        </Box>
     :
     <Box className={styles.quizContainer}> 
          {this.state.Quiz_Set.map((item,index)=>{
             if( Math.abs(this.state.activeStep - index)<=0)
             {
                return (
                    <div>
                      <Box className={styles.quizQuestionBox}>
                        <Box className={styles.quizQuestion}>{item.que}</Box>
                        <Box className={styles.quizTimer}><CircularProgress variant="determinate" value={50} /></Box>
                      </Box>
                      <Box key={item.quenum} className={styles.quizOptions}>

                      <FormControl>
                        <RadioGroup
                          aria-labelledby="demo-error-radios"
                          name="quiz"
                          value={value}
                          onChange={this.onInputChange}
                        >
                            {item.options.map((ans,index_ans)=>{
                                index_ans = index_ans + 1
                                return (
                                        <FormControlLabel value={ans.que_options} control={<Radio />} checked={!!ans.selected} name={item.queno} onChange={this.onInputChange} label={ans.que_options}/>

                                    // <Box key={index_ans} className={styles.quizOptions}>
                                                                                                             
                                    //      <input
                                    //         key={index_ans}put
                                    //         type="radio"
                                    //         name={item.queno}
                                    //         value={ans.que_options}
                                    //         checked={!!ans.selected}
                                    //         onChange={this.onInputChange}
                                    //     />
                                    //     {ans.que_options}
                                    // </Box>
                                    )
                            })}
                        </RadioGroup>
                     </FormControl>
                     </Box>
                    </div>
                )
             }else{
                 return null
             }
              
          })}

       <Box className="Quiz-MobileStepper">
        <MobileStepper  variant="dots" steps={this.state.Quiz_Set.length} position="static" activeStep={this.state.activeStep}
            nextButton={
                this.state.activeStep === this.state.Quiz_Set.length - 1 ? 
                <Button size="small" onClick={this.onsubmit}>
                 Submit
                </Button>
                :
                <Button size="small" onClick={this.handleNext} disabled={this.state.activeStep === this.state.Quiz_Set.length}>
                Next
                </Button>

            }
            backButton={
                <Button size="small" onClick={this.handleBack} disabled={this.state.activeStep === 0}>
                    Back
                </Button>
            }
        />
        </Box>
     </Box>
    }
     {this.Snackbarrender()}
  </Box>
   )
  }
}

export default Quiz;