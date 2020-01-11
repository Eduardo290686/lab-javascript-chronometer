class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.milliseconds = 0;
    this.intervalId = "";
  }
  startClick() {
    this.intervalId = setInterval(() => {
      this.milliseconds++;
      if(this.milliseconds === 99){
        this.currentTime++;
      }
    },10)
  }
  getMinutes() {
    return Math.floor(this.currentTime/60);
  }
  getSeconds() {
    return this.currentTime%60;
  }
  getMilliseconds(){
    if(this.milliseconds === 99){
      this.milliseconds = 0;
    }
    return this.milliseconds;
  }
  twoDigitsNumber(num) {
    if(num < 10){
      return `0${num}`;
    } else{
      return num.toString();
    }
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.milliseconds = 0;
    this.currentTime = 0;
  }
  splitClick() {
  }
}
