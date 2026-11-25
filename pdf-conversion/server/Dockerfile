FROM python:3.12-slim

ENV PYTHONUNBUFFERED=1 \
    PIP_NO_CACHE_DIR=1 \
    PORT=8000

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY main.py .

EXPOSE 8000

# Honor PORT yang di-inject platform (Render/Cloud Run/host lain); default 8000.
CMD sh -c "uvicorn main:app --host 0.0.0.0 --port ${PORT:-8000}"
