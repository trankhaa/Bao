import React from 'react';
import styled from 'styled-components';

const SidebarContainer = styled.div`
    width: 250px;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #fff;
    margin-right: 20px;
`;

const FilterSection = styled.div`
    margin-bottom: 20px;
`;

const FilterTitle = styled.h4`
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 10px;
`;

const FilterOption = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 5px;
`;

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
    margin-right: 10px;
`;

const FilterSidebar = () => {
    return (
        <SidebarContainer>
            {/* Thương Hiệu */}
            <FilterSection>
                <FilterTitle>Thương hiệu</FilterTitle>
                <FilterOption>
                    <Checkbox checked readOnly /> Tất Cả
                </FilterOption>
                <FilterOption>
                    <Checkbox /> Xigmatek
                </FilterOption>
                <FilterOption>
                    <Checkbox /> TeamGroup
                </FilterOption>
                <FilterOption>
                    <Checkbox /> Kingston
                </FilterOption>
                <FilterOption>
                    <Checkbox /> 1st Player
                </FilterOption>
                <FilterOption>
                    <Checkbox /> Lexar
                </FilterOption>
                <FilterOption>
                    <Checkbox /> MSI
                </FilterOption>
                <FilterOption>
                    <Checkbox /> Arctic
                </FilterOption>
                <FilterOption>
                    <Checkbox /> Deepcool
                </FilterOption>
                <FilterOption>
                    <Checkbox /> Khác
                </FilterOption>
                <FilterOption>
                    <Checkbox /> Gigabyte
                </FilterOption>
                <FilterOption>
                    <Checkbox /> Noctua
                </FilterOption>
                <FilterOption>
                    <a href="#">Xem thêm</a>
                </FilterOption>
            </FilterSection>

            {/* Lọc Giá */}
            <FilterSection>
                <FilterTitle>Lọc Giá</FilterTitle>
                <FilterOption>
                    <Checkbox checked readOnly /> Tất Cả
                </FilterOption>
                <FilterOption>
                    <Checkbox /> Dưới 500,000₫
                </FilterOption>
                <FilterOption>
                    <Checkbox /> 500,000₫ - 5,000,000₫
                </FilterOption>
                <FilterOption>
                    <Checkbox /> 5,000,000₫ - 15,000,000₫
                </FilterOption>
                <FilterOption>
                    <Checkbox /> 15,000,000₫ - 30,000,000₫
                </FilterOption>
                <FilterOption>
                    <Checkbox /> Trên 30,000,000₫
                </FilterOption>
            </FilterSection>
        </SidebarContainer>
    );
};

export default FilterSidebar;
