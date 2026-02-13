<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AI Sticker Extractor (SOTA)</title>
    <style>
        :root {
            --bg: #121212;
            --surface: #1e1e1e;
            --primary: #3b82f6;
            --primary-hover: #2563eb;
            --text: #ffffff;
            --text-muted: #a1a1aa;
            --border: #333333;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            background-color: var(--bg);
            color: var(--text);
            margin: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            min-height: 100vh;
            padding: 20px;
        }

        h1 { font-weight: 700; letter-spacing: -0.5px; margin-bottom: 5px; }
        p { color: var(--text-muted); font-size: 0.9rem; margin-top: 0; }

        .container {
            width: 100%;
            max-width: 800px;
            background: var(--surface);
            border-radius: 16px;
            border: 1px solid var(--border);
            padding: 20px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        }

        /* Toolbar */
        .toolbar {
            display: flex;
            gap: 10px;
            margin-bottom: 20px;
            flex-wrap: wrap;
        }

        button {
            background-color: var(--surface);
            border: 1px solid var(--border);
            color: var(--text);
            padding: 10px 20px;
            border-radius: 8px;
            cursor: pointer;
            font-weight: 500;
            transition: all 0.2s;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        button:hover { background-color: #2a2a2a; }
        
        button.primary {
            background-color: var(--primary);
            border-color: var(--primary);
            color: white;
        }
        button.primary:hover { background-color: var(--primary-hover); }
        button:disabled { opacity: 0.5; cursor: not-allowed; }

        /* Canvas Area */
        .canvas-wrapper {
            position: relative;
            width: 100%;
            min-height: 400px;
            background-image: 
                linear-gradient(45deg, #2a2a2a 25%, transparent 25%), 
                linear-gradient(-45deg, #2a2a2a 25%, transparent 25%), 
                linear-gradient(45deg, transparent 75%, #2a2a2a 75%), 
                linear-gradient(-45deg, transparent 75%, #2a2a2a 75%);
            background-size: 20px 20px;
            background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
            border-radius: 8px;
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px dashed var(--border);
        }

        canvas {
            max-width: 100%;
            max-height: 70vh;
            object-fit: contain;
        }

        #fileInput { display: none; }

        /* Progress Bar */
        .status-bar {
            margin-top: 20px;
            background: #252525;
            border-radius: 6px;
            height: 8px;
            width: 100%;
            overflow: hidden;
            display: none;
        }
        .progress-fill {
            height: 100%;
            background: var(--primary);
            width: 0%;
            transition: width 0.1s;
        }
        .status-text {
            margin-top: 8px;
            font-size: 0.85rem;
            color: var(--text-muted);
            text-align: center;
            min-height: 20px;
        }

        /* Badge for Tech */
        .badge {
            display: inline-block;
            background: rgba(59, 130, 246, 0.2);
            color: #60a5fa;
            padding: 2px 8px;
            border-radius: 4px;
            font-size: 0.75rem;
            margin-bottom: 15px;
        }
    </style>
</head>
<body>

    <span class="badge">Running RMBG-1.4 (SOTA) locally via Transformers.js</span>
    <h1>Object Extractor</h1>
    <p>Upload an image. The AI will auto-detect the subject (hair, foliage) and remove the background.</p>

    <div class="container">
        <div class="toolbar">
            <button onclick="document.getElementById('fileInput').click()">
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>
                Upload Image
            </button>
            <button class="primary" id="processBtn" onclick="processImage()" disabled>
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                Remove Background
            </button>
            <button onclick="downloadResult()" id="downloadBtn" disabled>
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                Download
            </button>
        </div>

        <input type="file" id="fileInput" accept="image/*" onchange="loadImage(event)">

        <div class="canvas-wrapper">
            <canvas id="mainCanvas"></canvas>
        </div>

        <div class="status-bar" id="progressBar">
            <div class="progress-fill" id="progressFill"></div>
        </div>
        <div class="status-text" id="statusText">Ready</div>
    </div>

    <!-- Load Transformers.js from CDN -->
    <script type="module">
        import { pipeline, env } from 'https://cdn.jsdelivr.net/npm/@xenova/transformers@2.16.0';

        // Configuration to force loading from CDN and ignore local checks
        env.allowLocalModels = false;
        env.useBrowserCache = true;

        let seg_pipeline = null;
        const canvas = document.getElementById('mainCanvas');
        const ctx = canvas.getContext('2d');
        let originalImage = null; // Store the Image object
        let processedCanvas = document.createElement('canvas'); // Off-screen canvas for the result

        window.loadImage = function(event) {
            const file = event.target.files[0];
            if (!file) return;

            const reader = new FileReader();
            reader.onload = function(e) {
                const img = new Image();
                img.onload = function() {
                    originalImage = img;
                    
                    // Resize logic for display canvas only (to fit screen)
                    // We will process the full resolution image later
                    canvas.width = img.width;
                    canvas.height = img.height;
                    ctx.drawImage(img, 0, 0);

                    document.getElementById('processBtn').disabled = false;
                    document.getElementById('downloadBtn').disabled = true;
                    updateStatus("Image loaded. Click 'Remove Background' to start.");
                };
                img.src = e.target.result;
            };
            reader.readAsDataURL(file);
        };

        window.processImage = async function() {
            if (!originalImage) return;

            const btn = document.getElementById('processBtn');
            const pBar = document.getElementById('progressBar');
            const pFill = document.getElementById('progressFill');
            
            btn.disabled = true;
            pBar.style.display = 'block';

            try {
                // Initialize pipeline if not already done
                if (!seg_pipeline) {
                    updateStatus("Downloading AI Model (RMBG-1.4)... This happens once.");
                    
                    // We use 'image-segmentation' with the RMBG-1.4 model
                    // This model is SOTA for handling hair/transparency
                    seg_pipeline = await pipeline('image-segmentation', 'Xenova/rmbg-1.4', {
                        progress_callback: (cb) => {
                            if (cb.status === 'progress') {
                                const percent = Math.round(cb.progress);
                                pFill.style.width = percent + "%";
                                updateStatus(`Loading model file ${cb.file}: ${percent}%`);
                            }
                        }
                    });
                }

                updateStatus("Analyzing image and generating alpha matte...");
                pFill.style.width = "100%"; // Indeterminate processing state

                // Run inference
                // The pipeline automatically handles resizing and post-processing
                const result = await seg_pipeline(originalImage.src);

                // result contains a mask (Pillow/RawImage-like object)
                // We need to apply this mask to our original image
                await applyMask(result);

                updateStatus("Processing complete!");
                document.getElementById('downloadBtn').disabled = false;
                btn.disabled = false;
                pBar.style.display = 'none';

            } catch (error) {
                console.error(error);
                updateStatus("Error: " + error.message);
                btn.disabled = false;
            }
        };

        async function applyMask(maskObj) {
            // maskObj is the mask generated by the AI
            // We need to convert it to a format we can draw on canvas
            // The pipeline usually returns a mask image.
            
            // Create a temporary image from the mask blob/url
            const maskImage = new Image();
            maskImage.src = maskObj.toDataURL(); // Convert mask output to base64
            
            await new Promise(r => maskImage.onload = r);

            // Set up off-screen canvas for composition
            processedCanvas.width = originalImage.width;
            processedCanvas.height = originalImage.height;
            const pCtx = processedCanvas.getContext('2d');

            // 1. Draw the Mask
            pCtx.drawImage(maskImage, 0, 0, processedCanvas.width, processedCanvas.height);

            // 2. Composite: Keep the Source (Original Image) only where the Mask is drawn
            // 'source-in' means: Draw the new image (original) ONLY where existing pixels (mask) are opaque
            pCtx.globalCompositeOperation = 'source-in';
            pCtx.drawImage(originalImage, 0, 0);

            // Reset composite op
            pCtx.globalCompositeOperation = 'source-over';

            // 3. Update the display canvas
            canvas.width = processedCanvas.width;
            canvas.height = processedCanvas.height;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(processedCanvas, 0, 0);
        }

        window.downloadResult = function() {
            const link = document.createElement('a');
            link.download = 'sticker-export.png';
            link.href = processedCanvas.toDataURL('image/png');
            link.click();
        };

        function updateStatus(msg) {
            document.getElementById('statusText').innerText = msg;
        }
    </script>
</body>
</html>
