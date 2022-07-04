import React from "react";
import * as S from './styled';
import RepositoryItem from "../repository-item";

const Repositories = () => {
    return (
        <S.WrapperTabs
        selectedTabClassName="is-selected" 
        selectedTabPanelClassName="is-selected"
        >
            <S.WrapperTabList>
                <S.WrapperTab>Repositories</S.WrapperTab>
                <S.WrapperTab>Starred</S.WrapperTab>
            </S.WrapperTabList>
            
            <S.WrapperTabPanel>
                 <RepositoryItem 
                    name='GITAPI'
                    fullName='Jrlinkin/GitApi'
                    linkToRepo='https://github.com/Jrlinkin/GitApi'
                 />
            </S.WrapperTabPanel>

            <S.WrapperTabPanel>
            <RepositoryItem 
                    name='Lista-de-tarefas'
                    fullName='Jrlinkin/Lista-de-tarefas'
                    linkToRepo='https://github.com/Jrlinkin/Lista-de-tarefas'
                 />
            </S.WrapperTabPanel>

        </S.WrapperTabs>
    )
}

export default Repositories;