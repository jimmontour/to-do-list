import { compareAsc, format } from 'date-fns'

const formatDate = (year, month, day) => {
    return format(new Date(year, month, day), 'yyyy-MM-dd')
}

export default dueDate