import React, { Component } from 'react'
import Foot from './Foot'
import Navbar from "./Navbar";
import "./RulesAndRegulations.css"

export default class RulesandReguslaations extends Component {
    render() {
        return (
            <div>
            <Navbar />    
            <div className="rules">
            <div className="rules-regulations d-flex align-items-center justify-content-center">

                <div className="col-md-6 border border-primary">
              <div className="card-body mt-3 p-2">
                  <br/>
                  <br/>
                <h1>Society Rules and Regulations</h1>
                <br/>
                <h4>These are some of the unstated rules and regulations of a colony which should be followed by all the residents.</h4>
                <br/>
                <ui>
                <li>Before starting any civil work, carpentry, painting, renovation etc in their houses every member of the society needs to take proper permission of the committee. In case if anyone doesn’t follow this rule then he/she shall abide to pay certain amount of penalty.</li>

                <li>Penalties are applied against the damaged caused while shifting the household goods in lifts, corridors, garden areas etc by any member of the colony.
No member can occupy the area near their front doors, corridors, passage for their personal usage.</li>


                <li>Every member of the society should park their vehicles in their respective allotted parking spaces only. If any illegal parking is done, then that person may cost a penalty for his mistake. Two wheelers should be parked separately. Only one or two vehicles of visitors or guests per flat are allowed to be parked in the premises of the apartment. Other vehicles are supposed to be parked out of the society’s boundary line.</li>

                <li>Salesmen, vendors or any other sellers are not allowed to enter the premises. Owners residing are not allowed to rent their houses for any commercial use as this might create trouble to other colony members.</li>


                <li>After using the community hall for any event or function it should be cleaned and no damages should be caused. If any damage is cause strict action against the owner will be taken. Music systems should be played inside of the flats with low volume only.</li>


                <li>Cricket, basket ball, badminton, football should be played only on the respective grounds. No children’s are allowed to play in the lobby area. In case of any property damage by the kid’s respective person or parents are held to be responsible.</li>

                <li>Wastage and over usage of water is not allowed. House owners will be considered responsible for this act and they have to pay the penalty costs for the same.</li>

                <li>Keeping pets is allowed after submitting the required NOC to the society. But if pets like dogs are creating any kind of chaos and disturbance to other society members then the pets won’t be allowed.</li>

                <li>Maintenance charges should be paid from to time. If failed after multiple warnings, any legal action can be processed against the respective person.</li>

                <li>Washing of vehicles, cars, bikes etc in the premises is strictly prohibited. Instead you can use washing area of the society.
Smoking in lobbies, passage is not allowed. If any irresponsible person is found smoking in the no smoking zone, he/she shall be charged with penalty.</li>
                </ui>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
           </div>
           </div>
           </div>
                <Foot/>
                
            </div>
            </div>
        )
    }
}
