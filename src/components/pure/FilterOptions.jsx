import FilterContainer from '../containers/FilterContainer';

const FilterOptions = () => {
    return (
        <div className='filter'>
            {/*Filter Container */}
            <FilterContainer filter='SHOW_ALL'>
                ALL
            </FilterContainer>
            <FilterContainer filter='SHOW_ACTIVE'>
                ACTIVE
            </FilterContainer>
            <FilterContainer filter='SHOW_COMPLETED'>
                COMPLETED
            </FilterContainer>
            
        </div>
    );
}

export default FilterOptions;
