import React, { Component } from 'react';
import './profile.css';

class Profile extends Component {

    pushStuff = (c) =>{
        let stuff = JSON.parse(localStorage.getItem("stuff"));
        let index = stuff.indexOf(c);
        if (index === -1){
            stuff.push(c);
        }
        localStorage.setItem("stuff", JSON.stringify(stuff));
    }
    

    renderProfile = (name, sex, age, zodiac, interest, c) => {
    	return(
    		<div className="col-lg-6 col-12">
                <div className="profile-item">
        			<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, 
                    ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis eni</p>
        			<ul>
        				<p>adasasdaad</p>
        				{ interest.map((item,key) => <li key={key}>{ item }</li>) }
        			</ul>
                    <div id={c} onClick={()=> this.pushStuff(c)}></div>
                </div>
    		</div>
    	);
    }

    render() {
        return (
            <div>
    			<div className="profile-tab">
    				<div className="aa container-fluid">
                        <div className="duck">
                            <img src="https://res.cloudinary.com/buituan/image/upload/v1569239394/Hpbd/vit.png" alt=""/>
                        </div>
                        <div className="row">
                            { this.renderProfile('AA', 'Nam', '18', 'AAA', [1,2,3,4],"stuff-a") }
                            { this.renderProfile('BB', 'Nu', '18', 'BBB', [1,2,3,4],"stuff-b") }
                        </div>
                    </div>

    			</div>            
                
            </div>
        );
    }
}
export default Profile;



