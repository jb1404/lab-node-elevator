class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.requests   = [];
    this.interval   = 0;
    this.destinationFloor = 0;

    this.waitingList = [];
    this.passengers = [];
    this.requests = [];
  }

  start() { 
    this.interval = setInterval( ()=> {
      this.update()
    },1000)
  }

  stop() {
    clearInterval(this.interval);
  }

  update(x) { 
    this.log();
    this._passengersEnter(x)

  }
  _passengersEnter(p) { 

    for (let i = 0; i < this.waitingList.length; i++)
    if (p.originFloor === this.floor)
      {
        passengers.push(this.waitingList[i])
        let temp = this.waitingList[i].name
        this.requests.push(waitingList[i].destinationFloor)
        console.log('Julia has enter the elevator')
        
          for (let j = 0; j < this.passengers.length; i++)
            {
              if (this.passengers[j].name === this.waitingList[i].name)
              this.waitingList.splice(i,1)
            }
      }
      console.log(this.requests,this.waitingList,this.passengers)
  }
  _passengersLeave() { 
    for (let i = 0; i < this.passengers.length; i++)
    if (this.passengers[i].destinationFloor === this.floor)
      {
        this.passengers[i].splice(i,1)
        console.log('Julia has left the elevator')
      }



  }
  floorUp() {
    if (this.floor === this.MAXFLOOR) {
      console.log('on est au MAX Chérie')
    }
    else this.floor += 1;
    
   }
  floorDown() { 
    if (this.floor === 0 ) {
      console.log('on va au sous sol chérie ?')
    }
    else this.floor -= 1;
  }

  call(x) { 
    let movements = [];
    movements.push(x);
    //console.log(movements);
    this.waitingList.push(x)
    this.requests.push(x.originFloor)

   //console.log(this.requests)
  }

  log() {
    let  data = {
                floor: this.floor,
                direction : 'up',
                requests:[]
    }
     //console.log(data);
    }
}



module.exports = Elevator;



