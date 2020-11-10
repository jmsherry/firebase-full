import React, {useEffect, useState} from "react";
export default function ServerTime() {
    const [time, setTime] = useState();
    useEffect(() => {
        fetch("/server-time")
            .then(resp => resp.json())
            .then(json => {
              console.log('json', json);
              setTime(json.serverTime)
            })
    }, []);
    return <div>
        Server time: {time}
    </div>
}