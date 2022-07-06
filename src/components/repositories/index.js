import React, { useEffect, useState } from "react";
import useGithub from "../../hooks/github-hooks";
import * as S from './styled';
import RepositoryItem from "../repository-item";

const Repositories = () => {

    const { githubState, getUserRepos, getUserStarred} = useGithub();

    const [hasUserForSearchRepos,setHasUserForSearchRepos] = useState(false);

    useEffect(()=>{

        if(!!githubState.user.login){
            getUserRepos(githubState.user.login);
            getUserStarred(githubState.user.login);
        }
        setHasUserForSearchRepos(!!githubState.repositories)
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [githubState.user])



    return (
        <>
            {hasUserForSearchRepos ? ( 
            <S.WrapperTabs
            selectedTabClassName="is-selected" 
            selectedTabPanelClassName="is-selected"
            >
                <S.WrapperTabList>
                    <S.WrapperTab>Repositories</S.WrapperTab>
                    <S.WrapperTab>Starred</S.WrapperTab>
                </S.WrapperTabList>
                
                <S.WrapperTabPanel>
                    <S.WarapperList>
                    {githubState.repositories.length !== 0 ?
                       githubState.repositories.map((item) => (
                          <RepositoryItem 
                          key={item.id}
                          name={item.name}
                          fullName={item.full_name}
                          linkToRepo={item.html_url}
                      />
                    )) :  <p>Este usuario não possui repositorios ainda!</p> }
                    </S.WarapperList>
                </S.WrapperTabPanel>

                <S.WrapperTabPanel>
                <S.WarapperList>
                {githubState.starred.length !== 0 ?
                githubState.starred.map((item) => (
                    <RepositoryItem 
                        key={item.id}
                        name={item.name}
                        fullName={item.full_name}
                        linkToRepo={item.html_url}
                        />
                    )) :  <p>Este usuario não possui starred ainda!</p> }
                    </S.WarapperList>
                </S.WrapperTabPanel>

            </S.WrapperTabs>
            ) : (
                <></>
            )}
        
        </>
    )
}

export default Repositories;