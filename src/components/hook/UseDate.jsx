import React from "react";

export const UseDate = () => {
    const [date, setDate] = React.useState('')
    React.useEffect(() => {
        const now = Date.now();
        const dateNow = new Date(now);
        setDate(dateNow.toLocaleDateString());
    }, [])
  return {date}
}
