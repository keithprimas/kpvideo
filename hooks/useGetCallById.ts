import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk"
import { useEffect, useState } from "react"

export const useGetCallById = (id: string | string[]) => {
    const [call, setCall] = useState<Call>()
    const [isCallLoading, setIsCallLoading] = useState(true)

    const client = useStreamVideoClient();

    useEffect(() => {
        if(!client) return;

        const loadCall = async () => {
            const { calls } = await client.queryCalls({
                filter_conditions: {
                    id
                }
            })

            if(calls.length > 0) setCall(calls[0]);

            setIsCallLoading(false)
        }

        loadCall();
    }, [client, id]);

    return { call, isCallLoading };
}


/*
  This custom hook, useGetCallById, retrieves and manages a single video call data using the Stream API based on the provided call ID.
  It maintains two pieces of state: call (a Call object) and isCallLoading (a boolean indicating the loading status).
  
  The hook utilizes the useStreamVideoClient hook to get the Stream video client.
  
  The useEffect hook defines an asynchronous function, loadCall, which queries the Stream API for a call with the specified ID.
  The query filters calls based on the provided ID.
  
  If a call is found, the call state is updated with the retrieved call.
  The isCallLoading state is set to false once the query completes.
  
  The hook returns an object containing the call and isCallLoading.
*/