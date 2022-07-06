import React from 'react';
import * as S from './styled';

const RepositoryItem = ({name, fullName, linkToRepo}) => {
    return (
        <S.Wrapper>
            <h2 title={name}>{name}</h2>
            <a  href={linkToRepo}
                target='_blank'
                rel="noreferrer"
                title={fullName}
                >
                    {fullName}
                </a>
        </S.Wrapper>
    )
}

export default RepositoryItem;