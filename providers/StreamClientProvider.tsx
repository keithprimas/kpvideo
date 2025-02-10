'use client';

import { ReactNode, useEffect, useState } from 'react';
import { StreamVideoClient, StreamVideo } from '@stream-io/video-react-sdk';
import { useUser } from '@clerk/nextjs';


import Loader from '@/components/Loader';
import { tokenProvider } from '@/Actions/stream.actions';


const API_KEY = process.env.NEXT_PUBLIC_STREAM_API_KEY;

const StreamVideoProvider = ({ children }: { children: ReactNode }) => {
  const [videoClient, setVideoClient] = useState<StreamVideoClient>();
  const { user, isLoaded } = useUser();

  useEffect(() => {
    if (!isLoaded || !user) return;
    if (!API_KEY) throw new Error('Stream API key is missing');

    const client = new StreamVideoClient({
      apiKey: API_KEY,
      user: {
        id: user?.id,
        name: user?.username || user?.id,
        image: user?.imageUrl,
      },
      tokenProvider: tokenProvider,
    });

    setVideoClient(client);
  }, [user, isLoaded]);

  if (!videoClient) return <Loader />

  return <StreamVideo client={videoClient}>{children}</StreamVideo>;
};

export default StreamVideoProvider;

/*  This code defines a React component called StreamVideoProvider that sets up a video client using the Stream API.
    It uses the useUser hook from @clerk/nextjs to get the current user and their loading status.
    The useEffect hook initializes the StreamVideoClient when the user is loaded and sets it in the state.
    If the API key is missing, it throws an error.
    If the video client is not yet initialized, it renders a Loader component.
    Once the video client is initialized, it renders the StreamVideo component with the video client and children as props.  */