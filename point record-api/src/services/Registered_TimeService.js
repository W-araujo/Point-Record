const Registered_Time = require('../models/Registered_time')

class Registered_timeService {

    async register(data, user_id) {
        return Registered_Time.register({
            time_registered: data.time_registered, user_id: user_id
        })
    }

    async get(id){
        return Registered_Time.get(id)
    }

    async list(){
        return Registered_Time.list()
    }

}

module.exports = new Registered_timeService()