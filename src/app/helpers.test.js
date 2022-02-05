import { ExamplePostList} from "../Components/fakeData";
import { postDataTidier } from "../Helpers";

const assert = require('assert');

describe('Tidying post list data', () => {});
it('ensures that the titles are text', () => {
    const tidiedData = postDataTidier(ExamplePostList);

    const title = tidiedData[0].title
    assert.ok(typeof(title) === "string")
})