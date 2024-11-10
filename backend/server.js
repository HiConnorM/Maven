const sequelize = require('./config/database');
const User = require('./models/User');
const Appointment = require('./models/Appointment');
const appointmentRoutes = require('./routes/appointments');
const scheduleRoutes = require('./routes/schedule');

sequelize.sync()
    .then(() => {
        console.log('Database synced successfully');
    })
    .catch(err => {
        console.error('Unable to sync database:', err);
    });


   
app.use('/appointments', appointmentRoutes);

app.use('/schedule', scheduleRoutes);