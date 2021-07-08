// Your code here
function createEmployeeRecord(employee) {
    return { firstName: employee[0],
            familyName: employee[1],
            title: employee[2],
            payPerHour: employee[3],
            timeInEvents: [],
            timeOutEvents: []
   }
}

function createEmployeeRecords(arr) {
    return arr.map(ar => createEmployeeRecord(ar))
}

function createTimeInEvent(obj, stamp){
     let ts = stamp.split(" ")
     let hour = ts[1]
     let date = ts[0]
     obj.timeInEvents.push({
         type: "TimeIn",
         hour: parseInt(hour),
         date: date
     })
        return obj
}

function createTimeOutEvent(obj, stamp) {
        let ts = stamp.split(" ")
        let hour = ts[1]
        let date = ts[0]

        obj.timeOutEvents.push({
            type: "TimeOut",
            hour: parseInt(hour),
            date: date
        })
            return obj
}

function hoursWorkedOnDate(obj, time) {
        let timeIn = obj.timeInEvents.hour
        let timeOut = obj.timeOutEvents.hour
        return  time = timeIn - timeOut
      

}