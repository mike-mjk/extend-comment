# Time Traveling Message App built with React, Redux, and Storybook

Thanks for checking out the readme!

## What's cool about this?

### It's built with Storybook, which was cool to use for the first time.

Working with Storybook added an interesting element to the development process. I can see how it can speed up development(especially when you have a lot of components that can exist in many states. When you can see all those states on the screen at once, things will go so much faster). I look forward to learning how to use it even more effectively and including it on future projects. 

This was one of my favorite videos I found about what makes Storybook cool! https://www.youtube.com/watch?v=UxbQ-cGnoCE

### Attention to detail.

This is relatively simple comment app but it includes some attention to detail that makes it really cool.

1. New messages will be visible as they are added. It scrolls to bottom. I initially used componentDidUpdate for this but that caused a bug in which like or edit or delete caused the scroll to bottom behavior as well. This was fixed by using prevProps and comparing the length of the messages array.

2. If you enter a username but don't submit it before submitting a message, the app will pull it in for you.. This is much less annoying than being told you must enter a username. It's sitting right there, lets just grab it and use it. Importantly, it won't overwrite an existing username in the case where a name has been submitted and there is also one in the input field.

3. The like button functions based off of "current user". So it becomes an unlike button if the user has already liked. I think this is better than just being able to like an unlimited number of times.

4. If you go to edit a message and cancel the changes you've made, the canceled changes will not persist if you go to edit again. 

5. If you edit a message to blank, it runs the delete message function. Rather than just have a blank message sitting in the thread. In a production app, you would want to confirm the user wants to delete, of course.

6. Uh, messages travel through time, duh!