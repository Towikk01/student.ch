'use client'
import React, { useEffect, useState } from 'react';
import CustomSection from '@/components/custom-section/CustomSection';
import ThreadGlobal from '@/components/threads/ThreadGlobal';
import ThreadReply from '@/components/threads/ThreadReply';
import { useDispatch, useSelector } from 'react-redux'
import { selectThreadId, resetThreadId } from '@/lib/slices/threadSlice/threadSlice';

const ThreadPage = () => {
  const threadId = useSelector(selectThreadId); // Get thread ID from Redux store
  const [thread, setThread] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(`http://localhost:8080/thread/${threadId}`, {
          method: 'GET'
        });

        if (!response.ok) {
          setError(response.statusText);
        } else {
          const data = await response.json();
          setThread(data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Error fetching threads");
      } finally {
        setIsLoading(false);
        dispatch(resetThreadId());
      }
    };

    if (threadId) {
      // Fetch data only if threadId exists
      fetchData();
    }
  }, [threadId]); // Fetch data whenever threadId changes






  return (
    <CustomSection direction="col" center="items-start">
      <div className="grid grid-cols-1 gap-y-1.5">
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {thread && (
          <ThreadGlobal
            text={thread.text}
            title={thread.title}
            id={thread.id}
            date={thread.date}
            username={thread.author.username}
            imageData={thread.imageData}
          />
        )}
        {/* Render ThreadReply components */}
      </div>
    </CustomSection>
  );
};

export default ThreadPage;
