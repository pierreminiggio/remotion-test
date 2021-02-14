import {useCurrentFrame, interpolate, Sequence} from 'remotion';

const Title: React.FC<{title: string;}> = ({title}) => {
    const frame = useCurrentFrame();
    const opacity = interpolate(frame, [0, 20], [0, 1], {extrapolateRight: 'clamp'});

    return (
      <div style={{opacity}} >{title}</div>
    )
}

export const MyVideo = () => {
  return (
    <div style={{flex: 1, color: "white", justifyContent: 'center', alignItems: 'center'}}>
      <Sequence from={0} durationInFrames={40}>
        <Title title="Hello"/>
      </Sequence>
      <Sequence from={40} durationInFrames={Infinity}>
        <Title title="World"/>
      </Sequence>
    </div>
  )
}