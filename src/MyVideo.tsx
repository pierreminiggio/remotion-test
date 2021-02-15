import {useCurrentFrame, interpolate, Sequence} from 'remotion';

const Title: React.FC<{title: string;}> = ({title}) => {
    const frame = useCurrentFrame();
    const opacity = interpolate(frame, [0, 20], [0, 1], {extrapolateRight: 'clamp'});

    return (
      <div style={{color: '#0A66C2', fontSize: 400, width: '100%', marginTop: '10%', textAlign: 'center', opacity}}>{title}</div>
    )
}

export const MyVideo = () => {
  return (
    <div>
      <Sequence from={0} durationInFrames={40}>
        <Title title="Salut"/>
      </Sequence>
      <Sequence from={40} durationInFrames={Infinity}>
        <Title title="LinkedIn"/>
      </Sequence>
    </div>
  )
}