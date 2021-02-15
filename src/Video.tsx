import {Composition} from 'remotion';
import {MyVideo} from './MyVideo'

export const Video: React.FC = () => {
  return (
    <>
      <Composition
        id="MyVideo"
        component={MyVideo}
        durationInFrames={400}
        fps={60}
        width={3840}
        height={2160}
      />
    </>
  );
};
