import { useState } from "react"
import { 
    Pagination,
    Form,
    FormControl,
    Button
} from "react-bootstrap"

function CustomPagination(props) {
    const {currentPage, totalPages, handlePagination} = props

    const handlePageChange = (pageNo) => {
        pageNo = parseInt(pageNo)
        handlePagination(pageNo)
    }

    const renderPageItems = () => {
        const pageItems = [];

        let startingPage = currentPage>=3 ? currentPage-2 : 1;
        let endingPage = currentPage<=totalPages-2 ? currentPage+2 : totalPages;

        for(let i=startingPage; i<=endingPage; i++){
            pageItems.push(
                <Pagination.Item key={i} active={i === currentPage} onClick={() => handlePagination(i)}>
                    {i}
                </Pagination.Item>
            )
        }

        return pageItems;
    }

    return (
        <div className="flex flex-col justify-center items-center">
            <Pagination>
                <Pagination.Prev 
                    disabled={currentPage === 1} 
                    onClick={(e) => {
                        e.preventDefault()
                        handlePageChange(currentPage-1)
                    }}
                />
                    {renderPageItems()}
                <Pagination.Next 
                    disabled={currentPage === totalPages} 
                    onClick={(e) => {
                        e.preventDefault()
                        handlePageChange(currentPage+1)
                    }}
                />
            </Pagination>
            <Form 
                onSubmit={(e) => {
                    e.preventDefault()
                    handlePageChange(e.target.PageNo.value)
                }}
                className="d-flex flex-row justify-center items-start"
            >
                <FormControl
                    type="number"
                    placeholder="Page No."
                    className="me-2 mb-2"
                    style={{
                        width: '6.3rem',
                        border: '1px solid gray'
                    }}
                    name="PageNo"
                    min={1}
                    max={totalPages}
                />
                <Button
                    type="submit" 
                    className="btn-md"
                >
                    Go
                </Button>
            </Form>
            <label htmlFor="">LastPage: {totalPages}</label>
        </div>
    )
}

export default CustomPagination