import React, {useCallback} from 'react'
import {useForm} from 'react-hook-form'
import Button from '../Button'
import Input from '../Input'
import RTE from '../RTE'
import Select from '../Select'
import appwriteService from '../../appwrite/config'
import {useSelector} from 'react-redux'
import{ useNavigate }from 'react-router-dom'



function PostForm({post}) {
 const {
  register,
  handleSubmit, watch,
  setValue, control,
  getValues
 } = useForm({
  defaultValues: {
    title: post?.title || "",
    slug: post?.slug|| "",
    content: post?.content || "",
    status: post?.status || "active"
  }
 })

 const navigate = useNavigate()
 const userData = useSelector((state) => state.auth.userData)

 const submit = async(data) => {
  if (post) {
    const file =data.image[0] ? await 
    appwriteService.uploadFile(data.image[0]) : null


    if (file) {
      appwriteService.deleteFile(post.featureImage)
      
    }
    const dbPost = await appwriteService.updatePost(post.$id, {
      ...data, 
      featureImage: file ? file.$id : undefined
    })

    if (dbPost) {
      navigate(`/post/${dbPost.$id}`)
    }
    
  } else{
    const file = await appwriteService.uploadFile
    (data,image[0])
    if (file) {
      const fileId = file.$id
      data.featureImage = fileId
      const dbPost = await appwriteService.createPost({...data, userId: userData.$id})

      if (dbPost) {
        navigate(`/post/${dbPost.$id}`)
      }
    }
  }
 }

 const slugTranform = useCallback((value) =>{
  if (value && typeof value === "string") 
    return value.trim().toLowerCase().replace(/[^a-zA-Z\d\s]+/g, '-')
  .replace(/\s/g, "-")
 }, [])

  
 React.useEffect(() =>{
  watch((value, {name}) =>{
    if (name === "title") {
      setValue("slug", slugTranform(value.title), {shouldValidate: true})
    }
    
  })
 }, [watch, slugTranform, setValue])

 return (
  <form onSubmit={handleSubmit(onsubmit)}
  className='flex flex-wrap'
  >
    <div className="w-2/3 px-2">
    <Input 
    label = "Title"
    placeholder = "Title"
    className = "mb-4"
    // registering the form here from the control form 
    {...register("title", {required: true})}
    />
    <Input 
    label = "Slug: "
    placeholder = "Slug"
    className = "mb-4"
    // registering the form here from the control form 
    {...register("slug", {required: true})}

    // trying to get the values from the input fireld here
    onInput= {(e) =>{
      setValue("slug", slugTranform(e.currentTarget.value),
    {shouldValidate: true})
    }}
    />

    <RTE 
    label="Content: "
    name="content"
    control={control}
    defaultValue={getValues("content")}
    />
    </div>

    <div className="1/3 px-2">
    <Input 
    label = "Featured Image"
    type = "file"
    className = "mb-4"
    accept= "image/png, image/jpg, image/jpeg"
    {...register("image", {required: !post})}
    />

    {post && (
      <div className="w-full mb-4">
        <img src={appwriteService.getFilePreview}
         alt={post.title}
         className='rounded-lg' />
      </div>
    )}

    <Select 
    option = {["active", "inactive"]}
    label="Status: "
    className = "mb-4"
    {...register("status", {required: true})}
    />

    <Button 
    type='submit'
    bgColor={post ? "bg-green-500" : undefined}
    className='w-full'
    >
      {post ? "Update" : "Submit"}
    </Button>
    </div>

  </form>
 )
}

export default PostForm
