import React from "react";
import './App.css';
import {MdModeEditOutline} from "react-icons/md";
import { IconName } from "react-icons/md";
import { MdEdit } from "react-icons/md";




function clickMe(){
    alert('Approved! ');
}
function edit(){
    alert('edited');
}

 function App(){
  
    return (
      
        <div>
        <button class="ed" onClick={edit}>
            EDIT <MdEdit />
       
        </button>

        <div class="bg-img">   
    <div>
     <div class="g1">
        <div className="cont1"><h1>ABC COMPANY, COIMBATORE BRANCH</h1>
     </div>
     </div>
     <div class="g2">
       <div className="cont2"><h2>Summer Intern</h2>
        </div>
        </div>
        </div>
        <div class="cont">
            <h3>End Date&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - &nbsp;</h3>
            <div class="date">July 20,2022</div>
        </div>

        <div class="cont">
            <h3>Start Date &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - &nbsp;</h3>
            <div class="date">May 20,2022</div>
        </div>

        <div class="cont">
            <h3>Duration&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - &nbsp;</h3>
            <div class="date">2 months</div>
        </div>

        <div class="cont">
            <h3>Domain &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - &nbsp; </h3>
            <div class="date">Blockchain</div>
        </div>

        <div class="cont">
            <h3>Stipend &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - &nbsp; </h3>
            <div class="date">Rs. 10000</div>
        </div>

        <div class="cont">
            <h3>Trainee Type&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - &nbsp; </h3>
            <div class="date">Students</div>
        </div>

        <div class="cont">
            <h3>Requirement&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - &nbsp; </h3>
            <div class="date">25 Students</div>
        </div>

        <div class="cont">
            <h3>Pre-Requisites&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - &nbsp; </h3>
            <div class="date">Fundamentals of Blockchain</div>
        </div>
        
        <div>
            <button onClick={clickMe}>
                Approve Students/Faculty List
            </button>
        </div>
        </div>
    </div>

  


       
    );

}

export default App;

