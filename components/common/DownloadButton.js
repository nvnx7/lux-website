import { useRouter } from 'next/router';
import { Button } from '@chakra-ui/react';

const DownloadButton = ({ ...props }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/download.zip');
  };

  return (
    <Button size="lg" alignSelf="center" mt={8} onClick={handleClick} {...props}>
      DOWNLOAD
    </Button>
  );
};

export default DownloadButton;
