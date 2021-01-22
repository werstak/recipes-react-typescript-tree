import * as React from 'react'
import {Tabs, Tab} from '@material-ui/core'
import Articles from '../components/Articles'
import Recipes from '../components/Recipes'
import SimpleBreadcrumbs from '../components/SimpleBreadcrumbs/SimpleBreadcrumbs';

interface CategoryProps {
    match: { params: { slug: string } }
}

const Category = ({match}: CategoryProps) => {
    const {slug} = match.params

    // console.log("slug", slug)

    const [activeTabId, setActiveTabId] = React.useState(0)

    const handleChangeActiveTab = (event: React.ChangeEvent<{}>, id: number) => {
        setActiveTabId(id)
    }

    // console.log('render')

    return (
        <div>
            <SimpleBreadcrumbs slug={slug}/>

            <Tabs variant="fullWidth"
                  value={activeTabId}
                  centered={true}
                  onChange={handleChangeActiveTab}
                  indicatorColor="primary">
                <Tab label="Articles"/>
                <Tab label="Recipes"/>
            </Tabs>

            {activeTabId === 0 && <Articles slug={slug}/>}
            {activeTabId === 1 && <Recipes slug={slug}/>}
        </div>
    )
}

export default Category
