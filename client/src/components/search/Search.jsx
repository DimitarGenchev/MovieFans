import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import InputGroup from 'react-bootstrap/InputGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import useForm from '../../hooks/useForm';
import { useNavigate } from 'react-router-dom';

const initialValues = {
    search: '',
    criteria: '',
    sort: '',
    pageSize: '6',
};

export default function Search({
    setQuery,
    setCurrentPage,
}) {
    const navigate = useNavigate();

    const searchHandler = ({ search, criteria, sort, pageSize }) => {
        const queryParams = new URLSearchParams({ search, criteria, sort, pageSize }).toString();
        navigate(`?${queryParams}`, { replace: true });

        if (!search && !criteria && !sort && !pageSize) {
            setQuery({
                search: '',
                criteria: '',
                sort: '',
                pageSize: 6,
                offset: 0,
            });

            setCurrentPage(1);
        }

        if (criteria || sort || pageSize) {
            setQuery(oldState => ({ ...oldState, search, criteria, sort, pageSize: parseInt(pageSize) }));
            setCurrentPage(1);
        }
    };

    const [formValues, changeHandler, submitHandler] = useForm(initialValues, searchHandler);

    return (
        <Form className="mx-auto mb-5 w-75" onSubmit={submitHandler}>
            <InputGroup>
                <Form.Control className="w-50" type="text" name="search" placeholder="Search..." value={formValues.search} onChange={changeHandler} />

                <Form.Select name="criteria" value={formValues.criteria} onChange={changeHandler}>
                    <option value="">Select criteria</option>
                    <option value="title">Title</option>
                    <option value="genre">Genre</option>
                </Form.Select>

                <Form.Select name="sort" value={formValues.sort} onChange={changeHandler}>
                    <option value="">Sort by</option>
                    <option value="_createdOn desc">Newest</option>
                    <option value="_createdOn">Oldest</option>
                    <option value="title">Title</option>
                </Form.Select>

                <FloatingLabel label="Page size">
                    <Form.Select name="pageSize" value={formValues.pageSize} onChange={changeHandler}>
                        <option value="6">6</option>
                        <option value="12">12</option>
                        <option value="18">18</option>
                    </Form.Select>
                </FloatingLabel>

                <Button type="submit" variant="primary">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </Button>
            </InputGroup>
        </Form>
    );
}