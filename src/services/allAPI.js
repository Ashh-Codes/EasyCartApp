import serverURL from "./baseURL";
import commonAPI from "./commonAPI";

export const addProductDetailsAPI = async(addProduct)=>{
    return await commonAPI("POST",`${serverURL}/allProducts`,addProduct)
}

export const getAllProductsAPI = async()=>{
    return await commonAPI("GET",`${serverURL}/allProducts`,"")
}

export const purchaseHistoryAPI = async(productDetails)=>{
    return await commonAPI("POST",`${serverURL}/history`,productDetails)
}

export const getHistoryAPI =async()=>{
    return await commonAPI("GET",`${serverURL}/history`,"")
}

export const removeHistoryAPI = async(historyId)=>{
    return await commonAPI("DELETE",`${serverURL}/history/${historyId}`,{})
}

export const removeProductAPI =async(productId)=>{
    return await commonAPI("DELETE",`${serverURL}/allProducts/${productId}`,{})
}

export const addCategoryAPI =async(categoryDetails)=>{
    return await commonAPI("POST",`${serverURL}/categories`,categoryDetails)
}

export const getCategoryAPI= async()=>{
    return await commonAPI("GET",`${serverURL}/categories`,"")
}

export const removeCategoryAPI =async(categoryId)=>{
    return await commonAPI("DELETE",`${serverURL}/categories/${categoryId}`,{})
}

export const getSingleProductAPI =async(id)=>{
    return await commonAPI("GET",`${serverURL}/allProducts/${id}`,"")
}

export const updateCategoryAPI = async(categoryId,categoryDetails)=>{
    return await commonAPI("PUT",`${serverURL}/categories/${categoryId}`,categoryDetails)
}

export const getSingleCategoryAPI =async(id)=>{
    return await commonAPI("GET",`${serverURL}/categories/${id}`,"")
}