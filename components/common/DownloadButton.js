import { Button } from '@chakra-ui/react';

const DownloadButton = ({ ...props }) => {
  return (
    <Button size="lg" alignSelf="center" mt={8} {...props}>
      DOWNLOAD
    </Button>
  );
};

export default DownloadButton;
