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
         hour: hour,
         date: date
     })
        return obj
}