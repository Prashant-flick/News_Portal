import { 
    Pagination,
    Form,
    FormControl,
    Button
} from "react-bootstrap"

function CustomPagination(props) {
    let {currentPage, totalPages, handlePagination} = props
    totalPages = totalPages>6666 ? 6666 : totalPages;

    const handlePageChange = (pageNo) => {
        pageNo = parseInt(pageNo)
        handlePagination(pageNo)
    }

    const renderPageItems = () => {
        const pageItems = [];

        pageItems.push(
            <Pagination.Item key={currentPage} active={true} onClick={() => handlePagination(currentPage)}>
                {currentPage}
            </Pagination.Item>
        )

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

                <Pagination.Item
                    hidden={currentPage === 1}
                    onClick={(e) => {
                        e.preventDefault()
                        handlePageChange(1)
                    }}
                >
                    {1}
                </Pagination.Item>
                <Pagination.Ellipsis
                    hidden={currentPage === 1}
                />

                {renderPageItems()}
                
                <Pagination.Ellipsis 
                    hidden={totalPages === currentPage}
                />

                <Pagination.Item
                    hidden={totalPages === currentPage}
                    onClick={(e) => {
                        e.preventDefault()
                        handlePageChange(totalPages)
                    }}
                >
                    {totalPages}
                </Pagination.Item>

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
            {/* <label htmlFor="">LastPage: {totalPages}</label> */}
        </div>
    )
}

export default CustomPagination