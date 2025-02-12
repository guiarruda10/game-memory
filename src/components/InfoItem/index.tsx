import * as C from './styles'

type Props = {
    Label: string;
    Value: string;
}

export const InfoItem = ({ Label, Value }: Props) => {
    return(
        <C.Container>
            <C.Label>{Label}</C.Label>
            <C.Value>{Value}</C.Value>
        </C.Container>
    );
}