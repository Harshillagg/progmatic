import React, { useState,useEffect } from 'react';

interface Post {
  id: number;
  title: string;
  description: string;
  username: string;
  date: string;
  category: string;
}

const App: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const postsPerPage: number = 6;

  // New state for the form inputs
  const [postTitle, setPostTitle] = useState<string>('');
  const [postDescription, setPostDescription] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [successMessage, setSuccessMessage] = useState<string>('');

  // Logic for displaying current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  useEffect(() => {
    const storedPosts = localStorage.getItem('posts');
    if (storedPosts) {
      setPosts(JSON.parse(storedPosts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(posts));
  }, [posts]);
  // Handle form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!postTitle || !postDescription) {
      setErrorMessage('Both title and description are required.');
      return;
    }

    const newPost: Post = {
      id: posts.length + 1,
      title: postTitle,
      description: postDescription,
      username: 'Username', // Replace with actual username
      date: new Date().toLocaleDateString(),
      category: 'Category', // Replace with actual category
    };

    setPosts([...posts, newPost]);
    setPostTitle('');
    setPostDescription('');
    setErrorMessage('');
    setSuccessMessage('Post submitted successfully!');

    // Clear success message after 3 seconds
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  // Function to handle post deletion
  const handleDeletePost = (postId: number) => {
    setPosts(posts.filter((post) => post.id !== postId));
  };

  return (
    <div className="max-w-6xl mx-auto p-4 mt-16 text-white bg-black">
      
      <main>
      <textarea placeholder="Search the topic" className='w-full bg-secondary rounded-3xl h-9 my-4 py-auto border border-livenow'></textarea>
        <section className="mb-8 border rounded-lg px-8 py-8 h-auto">
          
          <form className="space-y-4 flex justify-between" onSubmit={handleSubmit}>
            <div className='space-y-4'>
              <input
                type="text"
                placeholder="Enter post title"
                className="w-full p-2 bg-secondary border border-white text-white rounded-lg"
                value={postTitle}
                onChange={(e) => setPostTitle(e.target.value)}
              />
              <textarea
                placeholder="Add description here"
                className="w-full p-2 h-32 bg-secondary border border-white text-white rounded-lg"
                value={postDescription}
                onChange={(e) => setPostDescription(e.target.value)}
              ></textarea>
            </div>
            
            <div>
            <div className='justify-end'>
            <h2 className="text-3xl font-semibold mb-4">Post a</h2>
            <h2 className="text-3xl font-semibold mb-4">new</h2>
            <h2 className="text-3xl font-semibold mb-4">discussion</h2>
            </div>
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            {successMessage && <p className="text-green-500">{successMessage}</p>}
              <div className="flex justify-end space-x-4">
                <button type="button" className="py-2 px-4 border  text-white rounded-3xl" onClick={() => { setPostTitle(''); setPostDescription(''); setErrorMessage(''); }}>Cancel</button>
                <button type="submit" className="py-2 px-4 flex  bg-red-600 text-white rounded justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="30" viewBox="0 0 32 30" fill="none">
                  <path d="M15.8235 27.5C8.79892 27.5 3.10474 21.9037 3.10474 15C3.10474 8.09625 8.79892 2.5 15.8235 2.5C22.8481 2.5 28.5423 8.09625 28.5423 15C28.5423 21.9037 22.8481 27.5 15.8235 27.5ZM19.8617 15.03L17.1628 17.6813C16.9311 17.917 16.8029 18.2328 16.8058 18.5605C16.8087 18.8882 16.9425 19.2018 17.1783 19.4335C17.4141 19.6653 17.7331 19.7967 18.0666 19.7996C18.4001 19.8024 18.7213 19.6764 18.9612 19.4487L22.5593 15.9137C22.7978 15.6793 22.9317 15.3615 22.9317 15.03C22.9317 14.6985 22.7978 14.3807 22.5593 14.1463L18.9612 10.61C18.843 10.4939 18.7028 10.4019 18.5484 10.3391C18.394 10.2763 18.2286 10.2441 18.0615 10.2441C17.8945 10.2442 17.7291 10.2766 17.5748 10.3395C17.4204 10.4023 17.2802 10.4945 17.1621 10.6106C16.9237 10.8452 16.7897 11.1632 16.7899 11.4948C16.79 11.8264 16.9241 12.1444 17.1628 12.3787L19.8617 15.0287V15.03ZM13.515 15.03L10.8174 17.6813C10.5857 17.917 10.4575 18.2328 10.4604 18.5605C10.4633 18.8882 10.5971 19.2018 10.8329 19.4335C11.0687 19.6653 11.3877 19.7967 11.7212 19.7996C12.0547 19.8024 12.3759 19.6764 12.6158 19.4487L16.2127 15.9137C16.4511 15.6793 16.5851 15.3615 16.5851 15.03C16.5851 14.6985 16.4511 14.3807 16.2127 14.1463L12.6158 10.61C12.3772 10.3756 12.0535 10.244 11.7162 10.2441C11.3788 10.2442 11.0552 10.3761 10.8168 10.6106C10.5783 10.8452 10.4444 11.1632 10.4445 11.4948C10.4446 11.8264 10.5787 12.1444 10.8174 12.3787L13.515 15.0287V15.03Z" fill="#E5EBB2"/>
                </svg>
                  Post
                </button>
              </div>
            </div>
          </form>
        </section>
        <h1 className='font-semibold text-3xl my-4 mx-4'>All Discussion</h1>
        <section className="bg-black p-4 rounded">
          <div className="flex space-x-4 mb-4">
            <button className="py-2 px-4 bg-livenow rounded-t-lg text-black">Top Post</button>
            
            <button className="py-2 px-4 bg-secondary rounded-t-lg">Recent Post</button>
          </div>
          <hr className="border-t border-livenow" />
          <div className="grid grid-cols-2 gap-4 mt-4">
            {currentPosts.map(post => (
              <div key={post.id} className="bg-secondary p-4 rounded-lg">
                <div className='flex w-full justify-between'>
                <h3 className="text-lg font-semibold">{post.title}</h3>
                <span className='bg-livenow rounded-tl-xl px-2 py-2 text-black'>{post.category}</span>
                </div>
                

                <p className="mt-2">{post.description}</p>
                <div className="flex justify-between mt-4 text-sm">
                  <div className='flex flex-col bg-livenow px-2 py-2 rounded-tr-2xl text-black'>
                  <span>{post.username}</span>
                  <span>{post.date}</span>
                  </div>
                 
                  
                  {/* Added delete button here */}
                    <div className='flex gap-3 mt-8'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M24 12C24 12 19.5 3.75 12 3.75C4.5 3.75 0 12 0 12C0 12 4.5 20.25 12 20.25C19.5 20.25 24 12 24 12ZM1.7595 12C2.48477 10.8977 3.31896 9.87103 4.2495 8.9355C6.18 7.002 8.82 5.25 12 5.25C15.18 5.25 17.8185 7.002 19.752 8.9355C20.6825 9.87103 21.5167 10.8977 22.242 12C22.155 12.1305 22.059 12.2745 21.9495 12.432C21.447 13.152 20.7045 14.112 19.752 15.0645C17.8185 16.998 15.1785 18.75 12 18.75C8.82 18.75 6.1815 16.998 4.248 15.0645C3.31747 14.129 2.48328 13.1023 1.758 12H1.7595Z" fill="white"/>
                      <path d="M12 8.25C11.0054 8.25 10.0516 8.64509 9.34835 9.34835C8.64509 10.0516 8.25 11.0054 8.25 12C8.25 12.9946 8.64509 13.9484 9.34835 14.6517C10.0516 15.3549 11.0054 15.75 12 15.75C12.9946 15.75 13.9484 15.3549 14.6517 14.6517C15.3549 13.9484 15.75 12.9946 15.75 12C15.75 11.0054 15.3549 10.0516 14.6517 9.34835C13.9484 8.64509 12.9946 8.25 12 8.25ZM6.75 12C6.75 10.6076 7.30312 9.27226 8.28769 8.28769C9.27226 7.30312 10.6076 6.75 12 6.75C13.3924 6.75 14.7277 7.30312 15.7123 8.28769C16.6969 9.27226 17.25 10.6076 17.25 12C17.25 13.3924 16.6969 14.7277 15.7123 15.7123C14.7277 16.6969 13.3924 17.25 12 17.25C10.6076 17.25 9.27226 16.6969 8.28769 15.7123C7.30312 14.7277 6.75 13.3924 6.75 12Z" fill="white"/>
                    </svg> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <g clip-path="url(#clip0_216_893)">
                      <path d="M7 11V19C7 19.2652 6.89464 19.5196 6.70711 19.7071C6.51957 19.8946 6.26522 20 6 20H4C3.73478 20 3.48043 19.8946 3.29289 19.7071C3.10536 19.5196 3 19.2652 3 19V12C3 11.7348 3.10536 11.4804 3.29289 11.2929C3.48043 11.1054 3.73478 11 4 11H7ZM7 11C8.06087 11 9.07828 10.5786 9.82843 9.82843C10.5786 9.07828 11 8.06087 11 7V6C11 5.46957 11.2107 4.96086 11.5858 4.58579C11.9609 4.21071 12.4696 4 13 4C13.5304 4 14.0391 4.21071 14.4142 4.58579C14.7893 4.96086 15 5.46957 15 6V11H18C18.5304 11 19.0391 11.2107 19.4142 11.5858C19.7893 11.9609 20 12.4696 20 13L19 18C18.8562 18.6135 18.5834 19.1402 18.2227 19.501C17.8619 19.8617 17.4328 20.0368 17 20H10C9.20435 20 8.44129 19.6839 7.87868 19.1213C7.31607 18.5587 7 17.7956 7 17" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </g>
                      <defs>
                      <clipPath id="clip0_216_893">
                        <rect width="24" height="24" fill="white"/>
                      </clipPath>
                      </defs>
                  </svg>   
                  
                    </div>
                    <button className="py-1 px-2 bg-red-500 text-black rounded-tl-3xl " onClick={() => handleDeletePost(post.id)}>Delete</button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-end space-x-2 mt-4">
            {[...Array(Math.ceil(posts.length / postsPerPage)).keys()].map(number => (
              <button key={number + 1} onClick={() => paginate(number + 1)} className="py-1 px-3 bg-gray-700 rounded">{number + 1}</button>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;