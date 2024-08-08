import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import useForm from '../../hooks/useForm';
import { useNavigate } from 'react-router-dom';

const initialValues = {
    search: '',
    criteria: '',
    sort: '',
};

export default function Search({
    setQuery,
}) {
    const navigate = useNavigate();

    const searchHandler = ({ search, criteria, sort }) => {
        const queryParams = new URLSearchParams({ search, criteria, sort }).toString();
        navigate(`?${queryParams}`, { replace: true });

        if (!search && !criteria && !sort) {
            setQuery({});
        }

        if (criteria || sort) {
            setQuery({ search, criteria, sort });
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

                <Button type="submit" variant="primary">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </Button>
            </InputGroup>
        </Form>
    );
}