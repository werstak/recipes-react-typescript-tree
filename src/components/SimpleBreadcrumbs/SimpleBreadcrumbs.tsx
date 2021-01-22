import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {Dispatch} from 'redux'
import {Breadcrumbs, Chip} from '@material-ui/core'
import {getBreadcrumbs} from '../../actions/categoriesCreator'

const SimpleBreadcrumbs = ({slug, getBreadcrumbs, categoriesBreadcrumbs}: any) => {
    useEffect(() => {
        getBreadcrumbs(slug)
    }, [getBreadcrumbs, slug])

    const renderNested = () => {
        return categoriesBreadcrumbs.map((category, index) => {
            if (index === categoriesBreadcrumbs.length - 1) {
                return <Chip key={category._id} label={category.title} />
            }

            return (
                <Link to={`/category/${category._id}`} key={category._id}>
                    {category.title}
                </Link>
            )
        })
    }

    return (
        <Breadcrumbs aria-label="breadcrumb">
            {renderNested()}
        </Breadcrumbs>
    )
}

const mapStateToProps = (state: any) => ({
    categoriesBreadcrumbs: state.categories.nested
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    getBreadcrumbs: (payload: string) => dispatch(getBreadcrumbs(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(SimpleBreadcrumbs)
