import { RentalOrder } from '@/types';
import { Card } from '@mui/material';

interface ScheduleProps {
    rentalOrders: Array<RentalOrder>
}

const Schedule: React.FC<ScheduleProps> = ({ rentalOrders }: ScheduleProps) => {
    return (
        <Card>

        </Card>
    )
};

export default Schedule;