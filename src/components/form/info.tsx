import InfoWrapper from '../../styles/components/form/info';
import Icon from '../icons/icon';

export interface InfoProps {
    infoText: string
}
const Info = ( { infoText }: InfoProps ) => {
    return(
        <InfoWrapper>
            <Icon iconName='circleInfo' size='1.5' />
            <span>{infoText}</span>
        </InfoWrapper>
    )
};

export default Info;
