const application = require("express").Router();
const claps = require('./router/fans');
const scheduler = require('./router/schedule');
const medals_update = require('./router/medal');

application.use('/fans', claps.get_fans);
application.use('/fans', claps.post_fans);
application.use('/schedule', scheduler.get_all_schedule);
application.use('/schedule', scheduler.get_live_schedule);
application.use('/schedule', scheduler.get_schedule_country_wise);
application.use('/schedule', scheduler.get_schedule_date_wise);
application.use('/medal', medals_update.get_medals);
application.use('/medal', medals_update.post_medals);

module.exports = application;