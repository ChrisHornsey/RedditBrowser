import React from 'react';
    import { shallow } from 'enzyme';
    import Post from './Post';

    const imagePost = {
        title: "Example title",
        body: "",
        image: "https://i.redd.it/8fk8z63cyvf81.jpg?auto=webp&amp;s=0418d07c3ee5a343c00a1508a0a2313f515669b3",
        subreddit: "something"
    }

    const textPost = {
        title: "Example text post",
        body: "Some example text, with words and stuff",
        image: "",
        subreddit: "something"
    }
    

    describe('Testing the post component', () =>{
        describe('Testing with an example image type post', () => {
            let wrapper;
            beforeEach(() => {
                wrapper = shallow(<Post post={imagePost}/>)
            })
            it('there is a title rendered', () => {
                const title = wrapper.find('h2').text();
                expect(title).toBe(imagePost.title);       
            })
            it('there is an image rendered', () => {
                const image = wrapper.find('img');
                expect(image).toBeTruthy;
            })
            it('the subreddit is listed', () => {
                const subreddit = wrapper.find('h3').text();
                expect(subreddit).toBe(imagePost.subreddit);
            })
        })
        describe('Testing an example text type post', () => {
            let wrapper;
            beforeEach( () => {
                wrapper = shallow(<Post post = {textPost}/>)
            })
            it('there is a title rendered', () => {
                const title = wrapper.find('h2').text();
                expect(title).toBe(textPost.title);
            })
            it('the text body is rendered', () => {
                const body = wrapper.find('p').text();
                expect(body).toBe(textPost.body);
            })
            it('no image is rendered', () => {
                const image = wrapper.find('img');
                expect(image).toBeFalsey;
            })
            it('the subreddit is listed', () => {
                const subreddit = wrapper.find('h3').text();
                expect(subreddit).toBe(textPost.subreddit);
            })
                })
    })
