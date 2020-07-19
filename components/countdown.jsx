
import moment from 'moment'

const deadline = "2020-08-07T18:00:00";

const daysRemaining = () => {
    const eventdate = moment(deadline);
    const todaysdate = moment();
    return eventdate.diff(todaysdate, 'days');
}

const Countdown = () => <div className="d-flex align-items-center text-white flex-row bg-success rounded-lg p-3 border countdown clearfix">
    <div className="p-2 display-4 days">{daysRemaining()}</div>
    <div className="p-2">days until the video premiere <strong>{moment(deadline).format('Do MMM')}</strong></div>
</div>

export default Countdown;