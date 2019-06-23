<upload>
  <div class="grid-center-middle sign-up">
    <div class="upload-content ">
        <h1>Up Load</h1>
        <span>Share your pic</span>  
        <form id="upload-form" action="">
            <div>
                <label for="">Title</label>
                <input class="fullwidth" type="text" id="title" required placeholder="Choose a title">
            </div>
        <div>
            <label for="">Caption</label>
            <input class="fullwidth" id="caption" type="text" required placeholder="Tell something about your pic">
        </div>
        <div>
            <label for="">Category</label>
            <select name="" id="category" required>
                <option>Pet</option>
                <option>Insect</option>
            </select>
            <div>
                <label for="">Image</label>
                <input class="fullwidth" id="image" type="file" required value="upload">
            </div>
        </div>
            <p id="error-message"></p>
            <button class="fullwidth">Upload</button>
        </div>
        
        </form>  
    </div>
</upload>
