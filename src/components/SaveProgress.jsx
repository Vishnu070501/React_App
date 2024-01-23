import { useOnlineStatus } from '../hooks/useOnlineStatus';

export default function SaveButton() {
//   const [isOnline, setIsOnline] = useState(true);
//   useEffect(() => {
//     function handleOnline() {
//       setIsOnline(true);
//     }
//     function handleOffline() {
//       setIsOnline(false);
//     }
//     window.addEventListener('online', handleOnline);
//     window.addEventListener('offline', handleOffline);
//     return () => {
//       window.removeEventListener('online', handleOnline);
//       window.removeEventListener('offline', handleOffline);
//     };
//   }, []); this the common code which has been removed from both the files(online offline component) and has been included in a custom made hook

let isOnline = useOnlineStatus();
  function handleSaveClick() {
    console.log('✅ Progress saved');
  }

  return (
    <button disabled={!isOnline} onClick={handleSaveClick}>
      {isOnline ? 'Save progress' : 'Reconnecting...'}
    </button>
  );
}
