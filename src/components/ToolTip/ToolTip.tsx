import { Wrapper, Text, Triangle, TextArea } from './ToolTip.styles';

interface ToolTipProps {
  text: string;
  active: boolean;
}

const ToolTip = ({ text, active }: ToolTipProps) => {
  return (
    <Wrapper>
      {active && <Triangle />}
      {active && (
        <TextArea>
          <Text>{text}</Text>
        </TextArea>
      )}
    </Wrapper>
  );
};

export default ToolTip;
